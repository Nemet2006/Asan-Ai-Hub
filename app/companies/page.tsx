import {
  CtaBand,
  DashboardGrid,
  DemoPanel,
  FormCard,
  PageHero,
  SectionIntro,
  SplitHighlight
} from "@/components/marketing";
import { institutionBenefits, institutionDashboardCards } from "@/lib/site-data";

export default function CompaniesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Qurum operatoru"
        title="Operator paneli muracietleri daha duzgun yonlendiren ve daha cevik emal eden is masasina cevrilir"
        description="Qurum emekdasi her muraciet ucun avtomatik tesnifat, prioritet ve risk siqnallari gorur. Belelikle, manual baxis vaxti azalir ve kritik isler one cixir."
        primaryCta={{ label: "Qurum panelini ac", href: "/dashboard/company" }}
        secondaryCta={{ label: "Pilot sorgusu", href: "/contact" }}
        asideTitle="Qurum ucun qazanclar"
        asideItems={institutionBenefits}
      />

      <SplitHighlight
        eyebrow="Emeliyyat modeli"
        title="AI triage operatoru evez etmir, onu daha suretli ve daha ardicil qerar veren edir"
        description="Sistem muracieti qebul edir, kateqoriya ve aidiyyet teklif edir, prioritet skoru hesablayir ve operatora redakte edile bilen hazir kontekst teqdim edir."
        bullets={[
          "Asagi keyfiyyetli metnli muracietlerin duzgun basa dusulmesi",
          "Qurum daxilinde daha deqiq yonlendirme ve novbeleme",
          "Riskli ve tecili hallar ucun ayri xeberdarliq",
          "Netice materiali yuklenende avtomatik yoxlama isinin baslamasi"
        ]}
        panel={
          <DemoPanel
            title="Operator is masasi"
            subtitle="Novbe, risk ve cavab keyfiyyeti eyni gorunusde toplanir."
            items={[
              { label: "Yeni isler", value: "128" },
              { label: "High risk", value: "17" },
              { label: "SLA", value: "94%" },
              { label: "Override", value: "14%" }
            ]}
          />
        }
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Panel"
            title="Esas gostəriciler operator qerarini suretlendirmek ucundur"
            description="Kartlar operatorun hansi islere derhal baxmali oldugunu ve AI teklifinin ne qeder etibarli oldugunu gosterir."
          />
          <DashboardGrid items={institutionDashboardCards} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FormCard
            title="Qurum inteqrasiya formasi"
            description="Movcud muraciet axini, media saxlanma telebleri ve cavab prosesi barede melumat paylasin ki, modul inteqrasiyasi duzgun planlansin."
            fields={["Qurum adi", "Elaqe sexsi", "Email", "Muraciet kateqoriyasi", "Gundelik hecm", "Movcud API"]}
            buttonLabel="Inteqrasiya sorgusu"
          />
        </div>
      </section>

      <CtaBand
        title="Operator mehsuldarligini artirmaq ucun ilk effekt dogru triage qatindan gelir"
        description="Bu panel qurumun cavab muddetini ve yonlendirme keyfiyyetini eyni anda yaxsilasdirmağa fokuslanir."
        primary={{ label: "Qurum panelini ac", href: "/dashboard/company" }}
        secondary={{ label: "API modullari", href: "/courses" }}
      />
    </main>
  );
}
