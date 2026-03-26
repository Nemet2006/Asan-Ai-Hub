import Link from "next/link";
import {
  BlogGrid,
  CtaBand,
  DemoPanel,
  FeatureGrid,
  LogoCloud,
  PricingGrid,
  SectionIntro,
  SplitHighlight,
  StepsGrid,
  TestimonialGrid
} from "@/components/marketing";
import {
  guides,
  heroMetrics,
  howItWorks,
  integrationEcosystem,
  platformFeatures,
  rolloutPhases,
  testimonials
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Dovlet-vetendas munasibetleri ucun vizual AI qati</span>
            <h1>Muracieti sekilden anlayan ve icra neticesini yoxlayan vahid platforma</h1>
            <p>
              Bu demo ASAN muraciet informasiya sistemi ucun foto ve video esasli
              avtomatik analiz, kategoriyalashdirma, prioritetlesdirme ve evvel-sonra
              dogrulamasini vahid emeliyyat axininda birlesdirir.
            </p>
            <div className="hero-actions">
              <Link href="/students" className="button">
                Vetendas axinina bax
              </Link>
              <Link href="/courses" className="button button--ghost">
                API memarligi
              </Link>
            </div>
            <div className="hero-metrics">
              {heroMetrics.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-board">
            <div className="hero-board__top">
              <div>
                <span className="pill">Pilot ssenari</span>
                <h3>Foto ve videodan operativ qerar desteyine qeder</h3>
              </div>
              <strong>84 san triage</strong>
            </div>

            <div className="hero-stack">
              <div className="hero-stack__item">
                <strong>1. Vizual problemi tani</strong>
                <small>Obyekt, anomaliya, risk siqnallari ve mekansal isareler birlikde cixarilir.</small>
              </div>
              <div className="hero-stack__item">
                <strong>2. Muracieti avtomatik hazirla</strong>
                <small>Draft metn, kateqoriya, aidiyyet ve prioritet bir paket kimi teqdim olunur.</small>
              </div>
              <div className="hero-stack__item">
                <strong>3. Qurum neticesini dogrula</strong>
                <small>Yeni yuklenen media ilkin muracietle muqayise edilerek uygunsuzluq siqnallari yaradilir.</small>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Nece isleyir"
            title="Muracietin qebulu, qerar desteyi ve nezaret eyni mehsul mentiqinde birlesir"
            description="Hell yalniz analizi suretlendirmir; hem de yanlis yonlendirme riskini azaldir, netice keyfiyyetine nezareti guclendirir ve operatorlarin diqqetini real istisnalara yoneldirir."
            align="center"
          />
          <StepsGrid steps={howItWorks} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Platforma imkanlari"
            title="Cagirisda axtarilan butun kritik ehtiyaclar vahid modul destinde toplanir"
            description="Vizual analiz muherriki, avtomatik metn yaradulmasi, yonlendirme ve netice dogrulamasi ayri modullar kimi isleyir ve API uzerinden inteqrasiya olunur."
          />
          <FeatureGrid features={platformFeatures} />
        </div>
      </section>

      <SplitHighlight
        eyebrow="AI qerar masasi"
        title="Operator ucun yalniz melumat deyil, fealiyyete hazir qerar konteksti yaradilir"
        description="Platforma muracietin ne oldugunu, kime getmeli oldugunu ve neticenin sonradan nece yoxlanacagini eyni panelde gosterir. Bu yanasma hem ceviklik, hem de seffafliq yaradir."
        bullets={[
          "Vetendas ucun avtomatik metn drafti ve kateqoriya teklifi",
          "Qurum ucun risk esasli novbe ve SLA yonlendirmesi",
          "Nezaretci ucun evvel-sonra dogrulama ve audit siqnallari",
          "Feedback toplama ile modelin davamli yaxsilasdirilmasi"
        ]}
        panel={
          <DemoPanel
            title="Inteqre olunmus emeliyyat paneli"
            subtitle="Bir muracietin qebuldan cavab tesdiqine qeder kechdiyi reqemsal iz."
            items={[
              { label: "Confidence", value: "0.92" },
              { label: "Prioritet", value: "Tecili" },
              { label: "Aidiyyet", value: "Yol xidmeti" },
              { label: "Dogrulama skoru", value: "0.88" }
            ]}
          />
        }
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Ekosistem"
            title="Hell bir qurum ucun yox, koordinasiyali dovlet xidmeti modeli ucun nezerde tutulur"
            description="Platforma muxtelif qurumlari eyni melumat dili ve audit izi ile birlesdirerek muraciet idareciliyini daha cevik ve proaktiv edir."
          />
          <LogoCloud items={integrationEcosystem} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Deyer"
            title="Esas qazanc suret deyil, daha obyektiv qerar ve daha guclu nezaretdir"
            description="Ferqli rollar ucun platformanin verdiyi praktik fayda asagidaki kimi gorunur."
          />
          <TestimonialGrid items={testimonials} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Tetbiq merheleleri"
            title="Pilotdan emeliyyat muhitine kechid ucun realist yol xeritesi"
            description="Mehsul bir defelik demo kimi deyil, olcule bilen pilot ve merheleli tetbiq modeli kimi teqdim olunur."
          />
          <PricingGrid items={rolloutPhases} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Senedlesme"
            title="Texniki ve idareetme qerarlari ayri sened seviyyesinde esaslandirilir"
            description="Hellin mehsul mentiqi, API skeleti, risk cerchivesi ve KPI yanasmasi ayri senedler ve demo panellerle desteklenir."
          />
          <BlogGrid items={guides} />
        </div>
      </section>

      <CtaBand
        title="Bu skeleti birbasa pilot teqdimati ve texniki demo kimi istifade etmek olar"
        description="Sayt hissesi hellin deyerini gosterir, server ve verilenler modeli ise inteqrasiya ucun baslangic noqtesi yaradir."
        primary={{ label: "Demo panelleri ac", href: "/dashboard" }}
        secondary={{ label: "Pilot elaqesi", href: "/contact" }}
      />
    </main>
  );
}
