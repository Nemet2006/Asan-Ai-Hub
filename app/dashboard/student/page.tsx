import {
  DashboardGrid,
  PageHero,
  SectionIntro
} from "@/components/marketing";
import { citizenDashboardCards } from "@/lib/site-data";

const citizenSidebar = [
  "Yeni muraciet",
  "Media fayllari",
  "AI draft",
  "Kateqoriya teklifi",
  "Prioritet",
  "Status izleme",
  "Tarixce"
];

export default function StudentDashboardPage() {
  return (
    <main>
      <PageHero
        eyebrow="Vetendas paneli"
        title="Sekilden muraciete kecid ucun AI komekci"
        description="Bu gorunus vetendasin media yuklemesini, avtomatik metn teklifini ve gonderisden onceki son yoxlamani bir yerde toplayir."
        primaryCta={{ label: "Analiz ssenarileri", href: "/internships" }}
        secondaryCta={{ label: "API modullari", href: "/courses" }}
        asideTitle="Esas bloklar"
        asideItems={[
          "Media yukleme ve onizleme",
          "AI terefinden hazirlanan muraciet metni",
          "Kateqoriya, aidiyyet ve prioritet teklifi"
        ]}
      />

      <section className="container dashboard-shell">
        <aside className="dashboard-sidebar">
          <span className="eyebrow">Navigasiya</span>
          <h2>Vetendas is sahesi</h2>
          <ul className="dashboard-list">
            {citizenSidebar.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        <div className="dashboard-main">
          <section className="dashboard-main__hero">
            <span className="pill">Analiz hazirdir</span>
            <h1>Yoldaki iri cuxur askarlanib, sistem muracieti tecili prioritetle hazirlayib.</h1>
            <p>
              Draft metn, aidiyyet ve lokasiya teklifleri vetendasa gonderisden once tesdiq ucun gorunur.
            </p>
          </section>

          <DashboardGrid items={citizenDashboardCards} />

          <div className="dashboard-layout">
            <section className="dashboard-panel">
              <SectionIntro
                eyebrow="Muraciet drafti"
                title="AI terefinden hazirlanan metn"
                description="Vetendas bu metni istese redakte edib gondere biler."
              />
              <ul className="dashboard-list">
                <li>
                  <strong>Tesvir</strong>
                  Esas yol hissesinde neqliyyat hereketine mane olan iri cuxur movcuddur.
                </li>
                <li>
                  <strong>Kateqoriya</strong>
                  Yol infrastrukturu.
                </li>
                <li>
                  <strong>Aidiyyet</strong>
                  Seher yol xidmeti.
                </li>
              </ul>
            </section>

            <section className="dashboard-panel">
              <SectionIntro
                eyebrow="Etibar siqnallari"
                title="Qerarin niye verildiyi"
                description="Sistem vizual izahlari qisa formada gosterir."
              />
              <ul className="dashboard-list">
                <li>
                  <strong>Asfalt qopmasi</strong>
                  Zolaq daxilinde dərin qopma ve sath deformasiya görünur.
                </li>
                <li>
                  <strong>GPS uyğundurlugu</strong>
                  Geotag ve goruntu konteksti eyni istiqameti tesdiq edir.
                </li>
                <li>
                  <strong>Risk</strong>
                  Neqliyyat hereketine birbasa tesir ehtimali yuksekdir.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
