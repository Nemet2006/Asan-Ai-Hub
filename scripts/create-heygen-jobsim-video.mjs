import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const briefPath = join(root, "docs", "heygen-jobsim-ai-video.md");

if (!process.env.HEYGEN_API_KEY) {
  console.error("Missing HEYGEN_API_KEY. Export it before generating the video.");
  process.exit(1);
}

if (!existsSync(briefPath)) {
  console.error(`Missing production brief: ${briefPath}`);
  process.exit(1);
}

const brief = readFileSync(briefPath, "utf8");
const promptMatch = brief.match(/## HeyGen Prompt\s+([\s\S]*?)\n## Optional Azerbaijani Script/);

if (!promptMatch) {
  console.error("Could not find the HeyGen prompt block in the production brief.");
  process.exit(1);
}

const prompt = promptMatch[1].trim();
const orientation = process.env.HEYGEN_ORIENTATION || "landscape";
const args = [
  "video-agent",
  "create",
  "--prompt",
  prompt,
  "--orientation",
  orientation,
  "--wait",
  "--timeout",
  "45m",
];

if (process.env.HEYGEN_AVATAR_ID) {
  args.push("--avatar-id", process.env.HEYGEN_AVATAR_ID);
}

if (process.env.HEYGEN_VOICE_ID) {
  args.push("--voice-id", process.env.HEYGEN_VOICE_ID);
}

if (process.env.HEYGEN_STYLE_ID) {
  args.push("--style-id", process.env.HEYGEN_STYLE_ID);
}

console.log("Starting HeyGen Video Agent generation...");
console.log(`Orientation: ${orientation}`);

const child = spawn("heygen", args, {
  stdio: "inherit",
  env: process.env,
  shell: process.platform === "win32",
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
