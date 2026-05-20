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
