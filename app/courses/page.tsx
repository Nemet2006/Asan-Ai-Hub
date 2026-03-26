import { CourseGrid, CtaBand, FilterChips, PageHero, SectionIntro } from "@/components/marketing";
import { apiModules } from "@/lib/site-data";

const apiFilters = [
  "REST API",
  "JWT auth",
  "Async processing",
  "Webhook ready",
  "Audit log",
  "Supervisor access"
];

export default function CoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="API modullari"
        title="Hell birbasa ASAN muraciet platformasina inteqrasiya oluna bilen modul esasli arxitektura kimi qurulub"
        description="Frontend demo ile yanaşi, server skeleti qebul, analiz, yonlendirme, dogrulama ve insight modullarini ayri API seviyyesinde gosterir."
        primaryCta={{ label: "Server senedi", href: "/blog" }}
        secondaryCta={{ label: "Ana sehife", href: "/" }}
        asideTitle="Texniki prinsip"
        asideItems={[
          "Asinxron vizual analiz novbesi",
          "Rol esasli giris ve audit trail",
          "Mikroxidmet ve ya modul kimi yerlesdirme imkani"
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Inteqrasiya xeritesi"
            title="Qebuldan dogrulamaya qeder butun esas servis kontraktlari"
            description="Bu modullar movcud sisteme tedrici inteqrasiya ucun nezerde tutulub ve monolit daxilinde de, ayri servis kimi de tetbiq oluna biler."
          />
          <FilterChips items={apiFilters} />
          <div style={{ height: 18 }} />
          <CourseGrid items={apiModules} />
        </div>
      </section>

      <CtaBand
        title="Demo yalniz vizual deyil, inteqrasiya edile bilen texniki skelet de teqdim edir"
        description="API kontraktlari ve data modeli pilotu daha real muzakire etmeye imkan yaradir."
        primary={{ label: "Pilot elaqesi", href: "/contact" }}
        secondary={{ label: "Senedleri ac", href: "/blog" }}
      />
    </main>
  );
}
