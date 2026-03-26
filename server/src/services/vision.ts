export type AnalysisInput = {
  mediaType: "image" | "video";
  citizenNote?: string;
  gps?: { lat: number; lng: number };
  landmarks?: string[];
};

export type AnalysisResult = {
  draftText: string;
  category: string;
  assignedInstitution: string;
  priority: "low" | "medium" | "high" | "urgent";
  confidence: number;
  extractedSignals: string[];
};

export type VerificationInput = {
  initialSignals: string[];
  responseSignals: string[];
  sameStreetHint?: boolean;
  claimedResolved?: boolean;
};

export type VerificationResult = {
  sameLocation: boolean;
  issueResolved: boolean;
  similarityScore: number;
  warningReasons: string[];
};

function includesKeyword(source: string, keywords: string[]) {
  return keywords.some((keyword) => source.includes(keyword));
}

export function generateAnalysisPreview(input: AnalysisInput): AnalysisResult {
  const note = input.citizenNote?.toLowerCase() ?? "";
  const joinedLandmarks = (input.landmarks ?? []).join(" ").toLowerCase();
  const haystack = `${note} ${joinedLandmarks}`;

  if (includesKeyword(haystack, ["cuxur", "asfalt", "yol"])) {
    return {
      draftText:
        "Yolun hereket hissəsində iri cuxur ve asfalt qopmasi muşahide olunur, hereket tehlukesizliyine birbasa tesir edir.",
      category: "Yol infrastrukturu",
      assignedInstitution: "Yol xidmeti",
      priority: "urgent",
      confidence: 0.92,
      extractedSignals: ["asfalt qopmasi", "yol zolagi", "dərin cuxur"]
    };
  }

  if (includesKeyword(haystack, ["isiq", "qaranliq", "dirək"])) {
    return {
      draftText:
        "Kuce isiqlandirma elementi islemir ve gece vaxti hereket ucun qaranliq zona yaradir.",
      category: "Isiqlandirma",
      assignedInstitution: "Kommunal xidmet",
      priority: "high",
      confidence: 0.88,
      extractedSignals: ["dirək", "qaranliq zona", "yol kenari"]
    };
  }

  return {
    draftText:
      "Vizual material ictimai mekanla bagli infrastruktur problemini gosterir ve manual tesdiqle kateqoriya dəqiqləşdirilə biler.",
    category: "Ictimai infrastruktur",
    assignedInstitution: "Monitorinqle yonlendirme",
    priority: "medium",
    confidence: 0.74,
    extractedSignals: ["ictimai obyekt", "vizual anomaliya"]
  };
}

export function compareEvidence(input: VerificationInput): VerificationResult {
  const initialSet = new Set(input.initialSignals.map((signal) => signal.toLowerCase()));
  const responseSet = new Set(input.responseSignals.map((signal) => signal.toLowerCase()));

  let overlap = 0;
  initialSet.forEach((signal) => {
    if (responseSet.has(signal)) {
      overlap += 1;
    }
  });

  const denominator = Math.max(initialSet.size, 1);
  const similarityScore = Number((overlap / denominator).toFixed(2));
  const sameLocation = Boolean(input.sameStreetHint ?? similarityScore >= 0.5);
  const issueResolved = Boolean(input.claimedResolved ?? responseSet.has("temir olunub"));
  const warningReasons: string[] = [];

  if (!sameLocation) {
    warningReasons.push("Mekan uygunlugu zeyifdir.");
  }

  if (!issueResolved) {
    warningReasons.push("Problemin aradan qalxmasi tesdiqlenmedi.");
  }

  if (similarityScore < 0.35) {
    warningReasons.push("Vizual siqnal ortusu cox asagidir.");
  }

  return {
    sameLocation,
    issueResolved,
    similarityScore,
    warningReasons
  };
}
