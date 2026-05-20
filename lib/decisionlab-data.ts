export const skillLabels = {
  communication: "Kommunikasiya",
  problemSolving: "Problem həlli",
  empathy: "Empatiya",
  structure: "Struktur",
  businessThinking: "Biznes düşüncəsi",
  actionOrientation: "Növbəti addım",
  riskAwareness: "Risk nəzarəti"
} as const;

export type SkillKey = keyof typeof skillLabels;

export type SkillScoreMap = Record<SkillKey, number>;

export type DecisionOption = {
  id: string;
  label: string;
  description: string;
  feedback: string;
  impact: Partial<SkillScoreMap>;
};

export type AssessmentCase = {
  id: string;
  title: string;
  role: string;
  difficulty: "Easy" | "Medium" | "Hard";
  context: string;
  tension: string;
  successSignal: string;
  options: DecisionOption[];
};

export type Candidate = {
  name: string;
  role: string;
  status: "Reviewed" | "Shortlisted" | "Invited" | "Pending";
  completedAt: string;
  scores: SkillScoreMap;
};

export type Campaign = {
  title: string;
  role: string;
  invited: number;
  completed: number;
  deadline: string;
  status: "Active" | "Draft" | "Closed";
};

export const roleCards = [
  {
    role: "Customer Support Intern",
    cases: 10,
    skills: ["Empatiya", "Peşəkar ton", "Eskalasiyalar"],
    color: "teal"
  },
  {
    role: "Sales Assistant",
    cases: 10,
    skills: ["Etirazların idarəsi", "ROI dili", "Follow-up"],
    color: "indigo"
  },
  {
    role: "Data Analyst Intern",
    cases: 7,
    skills: ["Insight", "Prioritetləşdirmə", "Hesabat aydınlığı"],
    color: "amber"
  }
];

export const assessmentCases: AssessmentCase[] = [
  {
    id: "late-delivery",
    title: "Gecikmiş çatdırılma və əsəbi müştəri",
    role: "Customer Support Intern",
    difficulty: "Medium",
    context:
      "Premium müştəri məhsulun 3 gündür gecikdiyini, heç kimin məlumat vermədiyini və bu gün ya çatdırılma, ya da refund istədiyini yazır.",
    tension:
      "Müştərini sakitləşdirmək lazımdır, amma əməliyyat statusu təsdiqlənmədən qeyri-real söz vermək olmaz.",
    successSignal:
      "Empatiya, məsuliyyət, konkret update vaxtı və realist növbəti addım görünməlidir.",
    options: [
      {
        id: "promise-today",
        label: "Bu gün çatdırılacağını söz ver",
        description: "Müştərini sakitləşdirmək üçün təsdiqlənməmiş konkret söz verirsən.",
        feedback:
          "Sürətli görünür, amma təsdiqlənməmiş vəd reputasiya və eskalasiya riskini artırır.",
        impact: { actionOrientation: 4, riskAwareness: -12, communication: -5, structure: -4 }
      },
      {
        id: "own-update",
        label: "Məsuliyyəti qəbul et və update planı ver",
        description:
          "Üzr istəyir, logistika statusunu yoxlayacağını, 30 dəqiqə ərzində dəqiq update verəcəyini və kompensasiya variantını araşdıracağını bildirirsən.",
        feedback:
          "Güclü support davranışıdır. Hiss tanınır, boş vəd verilmir və konkret hərəkət planı qurulur.",
        impact: {
          empathy: 10,
          communication: 9,
          actionOrientation: 9,
          problemSolving: 8,
          riskAwareness: 7,
          structure: 5
        }
      },
      {
        id: "blame-logistics",
        label: "Logistikanı günahlandır",
        description: "Gecikmənin support komandadan asılı olmadığını deyirsən.",
        feedback:
          "Daxili səbəb doğru ola bilər, amma müştəri üçün məsuliyyətdən yayınma kimi səslənir.",
        impact: { empathy: -9, communication: -8, actionOrientation: -5, riskAwareness: -4 }
      }
    ]
  },
  {
    id: "price-objection",
    title: "Qiymət etirazı və qərarsız lead",
    role: "Sales Assistant",
    difficulty: "Medium",
    context:
      "B2B lead platformanı bəyənir, amma rəqibin 25% ucuz olduğunu deyir. Onun əsas prioritetləri sürətli tətbiq, support və ölçülə bilən nəticədir.",
    tension:
      "Endirim vermək asandır, amma dəyər arqumentini itirmək və margin riskini böyütmək ehtimalı var.",
    successSignal:
      "Namizəd qiyməti ehtiyac, ROI, risk və növbəti görüş çərçivəsində idarə etməlidir.",
    options: [
      {
        id: "fast-discount",
        label: "Dərhal endirim təklif et",
        description: "Lead-i itirməmək üçün qiyməti tez aşağı salırsan.",
        feedback:
          "Qısa müddətdə şansı artıra bilər, amma kommersiya düşüncəsi və dəyər dili zəif qalır.",
        impact: { actionOrientation: 5, businessThinking: -9, riskAwareness: -6, structure: -3 }
      },
      {
        id: "value-compare",
        label: "Ümumi dəyər və risk müqayisəsi qur",
        description:
          "Rəqib təklifini detallandırmağı xahiş edir, tətbiq vaxtı, support SLA və gizli xərclər üzrə müqayisə aparırsan.",
        feedback:
          "Satış üçün yetkin yanaşmadır. Qiyməti biznes nəticəsi, risk və uyğunluqla əlaqələndirir.",
        impact: {
          businessThinking: 11,
          problemSolving: 8,
          communication: 7,
          riskAwareness: 8,
          structure: 7,
          empathy: 3
        }
      },
      {
        id: "criticize",
        label: "Rəqibi zəif göstər",
        description: "Rəqibin keyfiyyətinin aşağı olduğunu deyərək müştərini çəkindirməyə çalışırsan.",
        feedback:
          "Sübutsuz rəqib tənqidi etibarı azaldır və lead-in real seçim kriteriyalarını açmır.",
        impact: { communication: -7, empathy: -4, businessThinking: 1, structure: -3 }
      }
    ]
  },
  {
    id: "refund-policy",
    title: "Refund tələbi və policy riski",
    role: "Customer Support Intern",
    difficulty: "Hard",
    context:
      "Müştəri xidmətin gözlədiyi nəticəni vermədiyini deyir və tam refund istəyir. Müqaviləyə görə tam refund avtomatik deyil, amma narazılıq əsaslı görünür.",
    tension:
      "Həm müştəri etibarını qorumaq, həm də səlahiyyət və presedent riskini nəzərə almaq lazımdır.",
    successSignal:
      "Empatiya, fakt toplama, policy çərçivəsi və eskalasiya birlikdə görünməlidir.",
    options: [
      {
        id: "approve-refund",
        label: "Tam refund-u dərhal təsdiqlə",
        description: "Müştərinin emosiyasını azaltmaq üçün pulun qaytarılacağını deyirsən.",
        feedback:
          "Empatiya görünür, amma səlahiyyət, policy və presedent riski nəzərə alınmır.",
        impact: { empathy: 6, actionOrientation: 4, riskAwareness: -11, businessThinking: -6 }
      },
      {
        id: "policy-refuse",
        label: "Policy-yə istinad edib rədd et",
        description: "Müqavilə şərtini əsas gətirib tələbi bağlayırsan.",
        feedback:
          "Risk nəzarəti var, amma müştəri hissi və reputasiya riski zəif idarə olunur.",
        impact: { riskAwareness: 4, empathy: -10, communication: -8, actionOrientation: -5 }
      },
      {
        id: "investigate",
        label: "Empatiya qur, faktları topla və eskalasiya et",
        description:
          "Problemi qəbul edir, istifadə tarixçəsini yoxlayır, mümkün kompensasiya variantlarını və cavab vaxtını bildirirsən.",
        feedback:
          "Ən balanslı yanaşmadır. Müştərinin hissini tanıyır, faktları ayırır və riski nəzarətdə saxlayır.",
        impact: {
          empathy: 10,
          communication: 9,
          riskAwareness: 9,
          problemSolving: 7,
          structure: 6,
          actionOrientation: 6
        }
      }
    ]
  },
  {
    id: "dashboard-insight",
    title: "Satış datasından qərar çıxarışı",
    role: "Data Analyst Intern",
    difficulty: "Medium",
    context:
      "Son 30 gündə trial istifadəçilərin 42%-i ikinci gün geri qayıtmır. Product manager bunun onboarding problemi olub-olmadığını soruşur.",
    tension:
      "Tək metrikaya baxıb nəticə çıxarmaq cazibəlidir, amma segment, kanal və aktivasiya davranışı yoxlanılmalıdır.",
    successSignal:
      "Namizəd hipotez qurur, əlavə data istəyir və biznes qərarı üçün aydın analiz planı verir.",
    options: [
      {
        id: "single-cause",
        label: "Birbaşa onboarding zəifdir de",
        description: "42% churn-ü onboarding problemi kimi təqdim edirsən.",
        feedback:
          "Sürətli nəticədir, amma data segmentasiyası və alternativ səbəblər nəzərə alınmır.",
        impact: { actionOrientation: 3, problemSolving: -7, structure: -5, riskAwareness: -6 }
      },
      {
        id: "segment-plan",
        label: "Hipotez və segment analiz planı qur",
        description:
          "Kanal, istifadəçi tipi, ilk sessiya davranışı, activation event və support ticket-ləri müqayisə etməyi təklif edirsən.",
        feedback:
          "Güclü analitik yanaşmadır. Tək metrikadan hökm çıxarmır, qərar üçün yoxlanıla bilən plan qurur.",
        impact: {
          problemSolving: 11,
          structure: 10,
          businessThinking: 8,
          riskAwareness: 7,
          communication: 5,
          actionOrientation: 6
        }
      },
      {
        id: "more-data-only",
        label: "Daha çox data lazım olduğunu de",
        description: "Əlavə istiqamət vermədən yalnız data çatışmadığını bildirirsən.",
        feedback:
          "Ehtiyatlıdır, amma qərar sahibinə konkret analiz yolu təqdim etmir.",
        impact: { riskAwareness: 3, problemSolving: 1, actionOrientation: -5, communication: -3 }
      }
    ]
  }
];

export const keywordRubric: Record<SkillKey, string[]> = {
  communication: ["aydın", "izah", "ton", "mesaj", "qısa", "peşəkar"],
  problemSolving: ["səbəb", "fakt", "araşdır", "hipotez", "həll", "analiz"],
  empathy: ["üzr", "anlayıram", "narahat", "hiss", "empatiya", "dinləyirəm"],
  structure: ["birinci", "sonra", "addım", "plan", "çərçivə", "nəticə"],
  businessThinking: ["dəyər", "roi", "büdcə", "sla", "gəlir", "nəticə"],
  actionOrientation: ["növbəti", "vaxt", "30 dəqiqə", "follow-up", "yoxlayacağam", "təklif"],
  riskAwareness: ["risk", "policy", "səlahiyyət", "eskalasiya", "presedent", "təsdiq"]
};

export const mockCandidates: Candidate[] = [
  {
    name: "Aysel Məmmədova",
    role: "Customer Support Intern",
    status: "Shortlisted",
    completedAt: "Bu gün, 10:24",
    scores: {
      communication: 83,
      problemSolving: 78,
      empathy: 90,
      structure: 76,
      businessThinking: 65,
      actionOrientation: 84,
      riskAwareness: 74
    }
  },
  {
    name: "Murad Əliyev",
    role: "Sales Assistant",
    status: "Invited",
    completedAt: "Bu gün, 11:05",
    scores: {
      communication: 77,
      problemSolving: 73,
      empathy: 69,
      structure: 72,
      businessThinking: 87,
      actionOrientation: 79,
      riskAwareness: 78
    }
  },
  {
    name: "Nigar Həsənli",
    role: "Data Analyst Intern",
    status: "Reviewed",
    completedAt: "Dünən, 16:40",
    scores: {
      communication: 72,
      problemSolving: 86,
      empathy: 62,
      structure: 84,
      businessThinking: 78,
      actionOrientation: 70,
      riskAwareness: 80
    }
  },
  {
    name: "Orxan Quliyev",
    role: "Sales Assistant",
    status: "Reviewed",
    completedAt: "Dünən, 15:10",
    scores: {
      communication: 68,
      problemSolving: 64,
      empathy: 61,
      structure: 66,
      businessThinking: 72,
      actionOrientation: 69,
      riskAwareness: 58
    }
  },
  {
    name: "Ləman Rzayeva",
    role: "Customer Support Intern",
    status: "Pending",
    completedAt: "Bazar ertəsi, 14:22",
    scores: {
      communication: 74,
      problemSolving: 67,
      empathy: 82,
      structure: 69,
      businessThinking: 60,
      actionOrientation: 73,
      riskAwareness: 61
    }
  }
];

export const campaigns: Campaign[] = [
  {
    title: "Customer Support Intern Assessment",
    role: "Customer Support Intern",
    invited: 42,
    completed: 31,
    deadline: "24 May",
    status: "Active"
  },
  {
    title: "Sales Assistant Assessment",
    role: "Sales Assistant",
    invited: 28,
    completed: 19,
    deadline: "27 May",
    status: "Active"
  },
  {
    title: "Data Analyst Trial Batch",
    role: "Data Analyst Intern",
    invited: 16,
    completed: 9,
    deadline: "Draft",
    status: "Draft"
  }
];

export const roadmapRows = [
  {
    area: "MVP v1",
    scope: "Auth mock, case solving, local report, company dashboard",
    status: "Hazırlandı"
  },
  {
    area: "Backend",
    scope: "PostgreSQL, Prisma, RBAC, invitation token-ləri",
    status: "Növbəti mərhələ"
  },
  {
    area: "AI scoring",
    scope: "OpenAI structured JSON, prompt versioning, retry və audit log",
    status: "Növbəti mərhələ"
  },
  {
    area: "Pilot",
    scope: "3 rol, 27 case, PDF report, company benchmark",
    status: "Satış üçün uyğun"
  }
];
