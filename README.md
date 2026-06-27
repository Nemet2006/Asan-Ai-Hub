# JobSim AI MVP Demo

Bu repo JobSim AI üçün Next.js əsaslı işlək frontend demo/prototipidir. Məqsəd real
MVP-in əsas məhsul axınını göstərməkdir: company dashboard, candidate assessment,
rubric scoring, skill report və ranking table.

## Hazır hissələr

- `app/page.tsx`: Pinterest-inspired SaaS dashboard üslubunda JobSim AI workspace
- `app/assessment/page.tsx`: candidate case solving flow
- `app/admin/page.tsx`: company dashboard, campaign status, ranking və skill analytics
- `components/AssessmentExperience.tsx`: local state ilə assessment və report generation
- `components/AdminDashboard.tsx`: localStorage-dan son nəticəni oxuyan company view
- `lib/decisionlab-data.ts`: JobSim AI rolları, case-lər, rubric keyword-ləri və mock cohort data
- `app/globals.css`: yeni responsive UI sistemi

## Demo necə işləyir

1. `/assessment` səhifəsində namizəd case-ləri cavablandırır.
2. Cavablar rubric və keyword siqnalları ilə skorlanır.
3. Skill report yaranır və nəticə `localStorage`-a yazılır.
4. `/admin` səhifəsi son nəticəni cohort ranking-ə əlavə edir.

## Növbəti production mərhələsi

- PostgreSQL + Prisma schema
- Auth və role-based access control
- Assessment invitation token-ləri
- OpenAI structured JSON scoring
- BullMQ/Redis evaluation queue
- Prompt versioning və AI audit logs
- Email notifications və tenant isolation

## Qeyd

Bu mühitdə `npm` və `node_modules` əlçatan olmadığı üçün build lokal olaraq icra
olunmadı. Node/npm quraşdırılmış maşında:

```bash
npm install
npm run dev
```

sonra tətbiq `http://localhost:3000` ünvanında açılmalıdır.

## Remotion JobSim AI promo video

This repo now includes a 75-second Remotion SaaS explainer video for JobSim AI.

- Landscape composition: `JobSimAI-Landscape` at 1920x1080
- Vertical composition: `JobSimAI-Vertical` at 1080x1920
- Entry point: `remotion/index.ts`
- Main config: `remotion/config.ts`
- Optional voiceover script: `remotion/voiceover-script.md`
- Placeholder logo: `public/jobsim-logo-placeholder.svg`

Preview the video:

```bash
npm install
npm run video:dev
```

Render MP4 files:

```bash
npm run video:render:landscape
npm run video:render:vertical
```

You can also render directly with Remotion:

```bash
npx remotion render remotion/index.ts JobSimAI-Landscape out/jobsim-ai-landscape.mp4
npx remotion render remotion/index.ts JobSimAI-Vertical out/jobsim-ai-vertical.mp4
```

The existing Next.js app still uses:

```bash
npm run dev
npm run build
```

Manual customization points:

- Update timing, scene text, colors, and the placeholder logo path in `remotion/config.ts`.
- Replace `public/jobsim-logo-placeholder.svg` with a final brand logo when available.
- Add recorded voiceover or music later if you want audio synced to the current scene timing.
