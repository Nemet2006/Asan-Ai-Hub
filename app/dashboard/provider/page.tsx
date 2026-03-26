import { DashboardGrid, PageHero, SectionIntro } from "@/components/marketing";
import { supervisorDashboardCards } from "@/lib/site-data";

const supervisorSidebar = [
  "Umumi baxis",
  "KPI paneli",
  "Uygunsuzluq siqnallari",
  "Qurum muqayisesi",
  "Model coverage",
  "Override analizi",
  "Audit loglari"
];

export default function ProviderDashboardPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nezaret paneli"
        title="Qapanan muraciet yox, keyfiyyetle hell olunan muraciet gorunusde olur"
        description="Bu panel rehberlik ve monitorinq merkezi ucun qurulub. Burada model davranisi, cavab uygunlugu ve qurumlar uzre keyfiyyet ferqleri aydin gorunur."
        primaryCta={{ label: "Pilot plani", href: "/pricing" }}
        secondaryCta={{ label: "Senedler", href: "/blog" }}
        asideTitle="Esas alətlər"
        asideItems={[
          "Uyğunsuz cavablarin erkən askarlanmasi",
          "Qurumlar uzre KPI muqayisesi",
          "Override ve confidence analizi"
        ]}
      />

      <section className="container dashboard-shell">
        <aside className="dashboard-sidebar">
          <span className="eyebrow">Navigasiya</span>
          <h2>Monitorinq is sahesi</h2>
          <ul className="dashboard-list">
            {supervisorSidebar.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        <div className="dashboard-main">
          <section className="dashboard-main__hero">
            <span className="pill">Audit siqnali: aktiv</span>
            <h1>Bugun 8 muracietde cavab materiali ile ilkin vizual subut arasinda riskli uyğunsuzluq askarlanib.</h1>
            <p>
              Panel bu isleri prioritet sira ile toplayir ve hem model, hem də qurum fealiyyeti uzre trend verir.
            </p>
          </section>

          <DashboardGrid items={supervisorDashboardCards} />

          <div className="dashboard-layout">
            <section className="dashboard-panel">
              <SectionIntro
                eyebrow="Qurum muqayisesi"
                title="Performans ferqləri"
                description="Qurumlar uzre dogrulama ve SLA keyfiyyeti yan-yana gorunur."
              />
              <ul className="dashboard-list">
                <li>
                  <strong>Yol xidmeti</strong>
                  Dogrulama skoru 0.91, uygunsuzluq faizi 4%.
                </li>
                <li>
                  <strong>Kommunal xidmet</strong>
                  Dogrulama skoru 0.86, uygunsuzluq faizi 7%.
                </li>
                <li>
                  <strong>Belediyye qrupu</strong>
                  Dogrulama skoru 0.79, manual audit telebi daha yuksekdir.
                </li>
              </ul>
            </section>

            <section className="dashboard-panel">
              <SectionIntro
                eyebrow="Model insight"
                title="Feedback ve override meylleri"
                description="Modelin daha cox harda zeiflediyi aydin sekilde gorunur."
              />
              <ul className="dashboard-list">
                <li>
                  <strong>Gecə vizuallari</strong>
                  Asagi isiq şertlerinde confidence en cox dusur.
                </li>
                <li>
                  <strong>Qarisik obyektler</strong>
                  Eyni kadra bir neche problem daxil olduqda routing xetasi arta bilir.
                </li>
                <li>
                  <strong>Feedback qazanci</strong>
                  Son 2 heftede override-lardan gelen yeni etiketleme model coverage-ni yaxşılaşdırıb.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
