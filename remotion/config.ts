export const FPS = 30;

export type Aspect = "landscape" | "vertical";

export type SceneConfig = {
  id: string;
  title: string;
  kicker: string;
  duration: number;
};

export const brand = {
  name: "JobSim AI",
  slogan: "Hire by skill, not by CV.",
  logoPath: "jobsim-logo-placeholder.svg",
  colors: {
    ink: "#0B1020",
    inkSoft: "#334155",
    paper: "#F8FAFC",
    white: "#FFFFFF",
    line: "#D8E2F0",
    blue: "#2563EB",
    purple: "#7C3AED",
    cyan: "#06B6D4",
    green: "#16A34A",
    amber: "#F59E0B",
    rose: "#E11D48",
  },
};

export const scenes: SceneConfig[] = [
  {
    id: "hook",
    title: "CVs don't always show real skills.",
    kicker: "CV != Real Skill",
    duration: 7,
  },
  {
    id: "problem",
    title:
      "Students struggle to prove ability. Companies struggle to find who can do the work.",
    kicker: "Too many CVs. Too little proof.",
    duration: 8,
  },
  {
    id: "solution",
    title: "JobSim AI replaces empty CV screening with real job simulations.",
    kicker: "Meet JobSim AI",
    duration: 8,
  },
  {
    id: "candidate",
    title: "Candidates choose a field, complete a mini task, and submit their answer.",
    kicker: "Choose field -> Complete task -> Submit answer",
    duration: 12,
  },
  {
    id: "analysis",
    title: "AI analyzes the response and generates a clear Skill Report.",
    kicker: "AI Skill Report",
    duration: 12,
  },
  {
    id: "company",
    title: "Companies shortlist candidates based on performance, not resume keywords.",
    kicker: "Shortlist by real ability",
    duration: 11,
  },
  {
    id: "value",
    title: "For candidates: prove your skills. For companies: hire smarter.",
    kicker: "Real tasks. Real reports. Better hiring.",
    duration: 10,
  },
  {
    id: "cta",
    title: "JobSim AI - Hire by skill, not by CV.",
    kicker: "Join the pilot",
    duration: 7,
  },
];

export const totalDurationInFrames = scenes.reduce(
  (total, scene) => total + scene.duration * FPS,
  0,
);

export const voiceoverScript =
  "CVs don't always show real skills. Students and fresh graduates apply to many jobs, but often cannot prove what they can actually do. At the same time, companies review hundreds of CVs and still struggle to identify the strongest candidates. JobSim AI changes that. Candidates choose a career field, complete a realistic job simulation task, and submit their answer. Our AI analyzes the response and generates a clear Skill Report showing strengths, weaknesses, and performance. Companies can then shortlist candidates based on real ability, not just resume keywords. For candidates, JobSim AI helps prove skills. For companies, it helps hire smarter. JobSim AI - hire by skill, not by CV.";
