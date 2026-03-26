import { CtaBand, PageHero, PricingGrid, SectionIntro } from "@/components/marketing";
import { rolloutPhases } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pilot plani"
        title="Tetbiq yanasmasi merheleli, olcule bilen ve emeliyyat riskini azaldan model uzre qurulub"
        description="Hellin uguru yalniz model deqiqliyi ile yox, pilot scope-un duzgun secilmesi, insan nezareti ve KPI olculmesi ile temin olunur."
        primaryCta={{ label: "Pilot elaqesi", href: "/contact" }}
        secondaryCta={{ label: "Analiz ssenarileri", href: "/internships" }}
        asideTitle="Pilot ucun esas sutunlar"
        asideItems={[
          "Mehdud kateqoriya ve aydin coverage",
          "Insan-in-the-loop qerar mexanizmi",
          "Deqiqlik, SLA ve uygunsuzluq KPI-lari"
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Merheleler"
            title="Hellin genislenmesi idare olunan risk modeli ile planlanir"
            description="Evvel sade ve deyerli use case-lerle baslamaq, sonra netice dogrulamasini ve nezaret qatini derinlesdirmek tovsiye olunur."
          />
          <PricingGrid items={rolloutPhases} />
        </div>
      </section>

      <section className="section">
        <div className="container kicker-grid">
          <article className="card kicker-card">
            <h3>KPI paketi</h3>
            <p>
              Kateqoriyalashdirma deqiqliyi, prioritet uygunlugu, manual emal vaxti ve orta cavab muddeti pilotun esas olculeridir.
            </p>
          </article>
          <article className="card kicker-card">
            <h3>Risk nezareti</h3>
            <p>
              Confidence hedleri, manual override, audit trail ve uygunsuzluq eskalasiyasi istehsal ucun vacib qoruma qatlaridir.
            </p>
          </article>
          <article className="card kicker-card">
            <h3>Mexfilik</h3>
            <p>
              Media fayllari, lokasiya melumati ve model cixislari saxlanma siyaseti ve rol esasli giris cerchivesinde idare olunur.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Pilotun uguru ucun scope, olcu ve insan nezareti evvelceden razilasdirilmalidir"
        description="Bu demo hemin muzakireni mehsul, texniki ve emeliyyat seviyyesinde aparmaq ucun hazir baza yaradir."
        primary={{ label: "Elaqe formasi", href: "/contact" }}
        secondary={{ label: "Dashboardlar", href: "/dashboard" }}
      />
    </main>
  );
}
