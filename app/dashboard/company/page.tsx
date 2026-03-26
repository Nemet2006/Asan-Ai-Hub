import { DashboardGrid, PageHero, SectionIntro } from "@/components/marketing";
import { institutionDashboardCards } from "@/lib/site-data";

const institutionSidebar = [
  "Umumi baxis",
  "Yeni muracietler",
  "AI triage novbesi",
  "Aidiyyet yonlendirmesi",
  "SLA ve prioritet",
  "Netice yuklemeleri",
  "Xeberdarliqlar"
];

export default function CompanyDashboardPage() {
  return (
    <main>
      <PageHero
        eyebrow="Qurum paneli"
        title="Triage, prioritet ve cavab keyfiyyeti eyni is masasinda"
        description="Qurum operatoru yeni muracietleri AI teklifi ile birlikde gorur, onlari duzgun novbeye salır ve netice materialini yukleyende sistem dogrulama ishini basladir."
        primaryCta={{ label: "Analiz ssenarileri", href: "/internships" }}
        secondaryCta={{ label: "Pilot plani", href: "/pricing" }}
        asideTitle="Esas alətlər"
        asideItems={[
          "AI esasli kateqoriya ve aidiyyet",
          "Risk prioriteti ve SLA teklifi",
          "Netice materialinin avtomatik dogrulanmasi"
        ]}
      />

      <section className="container dashboard-shell">
        <aside className="dashboard-sidebar">
          <span className="eyebrow">Navigasiya</span>
          <h2>Qurum is sahesi</h2>
          <ul className="dashboard-list">
            {institutionSidebar.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        <div className="dashboard-main">
          <section className="dashboard-main__hero">
            <span className="pill">Novbe saglamligi: guclu</span>
            <h1>Yeni gelen muracietlerin boyuk hissesi AI terefinden duzgun kateqoriya ile evvelceden isarelenib.</h1>
            <p>
              Operator esasi diqqeti yalniz tecili, zeif confidence ve manual yoxlama isteyen islere yoneldir.
            </p>
          </section>

          <DashboardGrid items={institutionDashboardCards} />

          <div className="dashboard-layout">
            <section className="dashboard-panel">
              <SectionIntro
                eyebrow="Triage novbesi"
                title="Bugunun axini"
                description="Operatora hansi islerin derhal baxis istediyini qisa sekilde gosterir."
              />
              <ul className="dashboard-list">
                <li>
                  <strong>17 tecili is</strong>
                  Yol qezasi riski, su sizmasi ve qaranliq zona ile bagli hallar.
                </li>
                <li>
                  <strong>11 zeif confidence</strong>
                  Manual baxis ve kateqoriya tesdiqi teleb olunur.
                </li>
                <li>
                  <strong>9 routing duzelisi</strong>
                  AI teklifinden ferqli bolmeye yonlendirilen muracietler.
                </li>
              </ul>
            </section>

            <section className="dashboard-panel">
              <SectionIntro
                eyebrow="Netice dogrulamasi"
                title="Qurumun yuklediyi cavab fayllari"
                description="Evvel-sonra uygunlugunun ilkin yoxlamasi buradan izlənir."
              />
              <ul className="dashboard-list">
                <li>
                  <strong>6 fayl tam uygun</strong>
                  Eyni mekan ve problemin aradan qaldirilmasi skoru yuksekdir.
                </li>
                <li>
                  <strong>2 fayl xebardarliqla</strong>
                  Mekan uyğundurlugu zeifdir, manual audit tovsiye olunur.
                </li>
                <li>
                  <strong>1 fayl uygunsuz</strong>
                  Yeni media ilkin muraciet obyektine aid gorunmur.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
