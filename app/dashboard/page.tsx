import Link from "next/link";
import { PageHero, SectionIntro } from "@/components/marketing";

const dashboardLinks = [
  {
    title: "Vetendas paneli",
    href: "/dashboard/student",
    description: "Media yukleme, AI draft, kateqoriya teklifi ve muraciet tesdiqi."
  },
  {
    title: "Qurum paneli",
    href: "/dashboard/company",
    description: "Triage novbesi, prioritet, aidiyyet ve netice materialinin qebulu."
  },
  {
    title: "Nezaret paneli",
    href: "/dashboard/provider",
    description: "Uygunsuzluq siqnallari, KPI-lar, override-lar ve audit gorunusu."
  }
];

export default function DashboardIndexPage() {
  return (
    <main>
      <PageHero
        eyebrow="Demo paneller"
        title="Bir muracietin butun heyat dovru ucun uc ayri emeliyyat gorunusu"
        description="Vetendas, qurum operatoru ve nezaret merkezi ucun ayrilmis paneller eyni data modeline ve AI analiz qatina baglanir."
        primaryCta={{ label: "Vetendas paneli", href: "/dashboard/student" }}
        secondaryCta={{ label: "Qurum paneli", href: "/dashboard/company" }}
        asideTitle="Ortaq mehsul mentiqi"
        asideItems={[
          "Media qebulu ve saxlanmasi",
          "AI analiz, prioritet ve yonlendirme",
          "Evvel-sonra dogrulama ve audit trail"
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Panelleri sec"
            title="Eyni sistem ferqli rollara ferqli baxis verir"
            description="Bu demo gorunusleri prosesin hansi merhelesinde hansi melumatin faydali oldugunu aydinlasdirir."
          />
          <div className="kicker-grid">
            {dashboardLinks.map((item) => (
              <article key={item.href} className="card kicker-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.href} className="button button--ghost">
                  Demo ac
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
