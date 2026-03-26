import {
  CtaBand,
  DashboardGrid,
  DemoPanel,
  FormCard,
  PageHero,
  SectionIntro,
  SplitHighlight
} from "@/components/marketing";
import { supervisorBenefits, supervisorDashboardCards } from "@/lib/site-data";

export default function ProvidersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nezaret ve analitika"
        title="Nezaret paneli cavab keyfiyyetini, model davranisini ve uygunsuzluq risklerini gorunen edir"
        description="Bu gorunus monitorinq merkezi ve rehberlik ucun nezerde tutulub. Meqsed yalniz nece muracietin baglandigini deyil, ne qederinin duzgun hell olundugunu da olcmekdir."
        primaryCta={{ label: "Nezaret panelini ac", href: "/dashboard/provider" }}
        secondaryCta={{ label: "Senedlere bax", href: "/blog" }}
        asideTitle="Nezaretci ucun qazanclar"
        asideItems={supervisorBenefits}
      />

      <SplitHighlight
        eyebrow="Audit qatlari"
        title="Evvel-sonra uygunlugu, override-lar ve zeif confidence hallari ayri nezaret sethine cixarilir"
        description="Belelikle, sistem yalniz emeliyyat aləti yox, eyni zamanda keyfiyyet ve hesabatliliq aləti kimi isleyir."
        bullets={[
          "Uygunsuz cavab materiallarinin erken askarlanmasi",
          "Qurumlar uzre muqayiseli performans gorunusu",
          "Modelin zeif sinifleri ve override sebeblerinin analizi",
          "Pilot KPI-larinin davamli olculmesi"
        ]}
        panel={
          <DemoPanel
            title="Audit ve insight paneli"
            subtitle="Keyfiyyet siqnallari rehberlik ucun bir yerde gorunur."
            items={[
              { label: "Uygunsuzluq", value: "8" },
              { label: "Coverage", value: "12 sinif" },
              { label: "Avg. score", value: "0.88" },
              { label: "Override", value: "14%" }
            ]}
          />
        }
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Gostəriciler"
            title="Rehberlik ucun faydali panel yalniz fealiyyet sayini deyil, netice keyfiyyetini de olcmelidir"
            description="Bu kartlar dogrulama, uygunsuzluq ve model dayaniqligi uzre esas baxisi formalaşdirir."
          />
          <DashboardGrid items={supervisorDashboardCards} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FormCard
            title="Monitorinq ehtiyacini qeyd edin"
            description="Audit seviyesi, hesabat tezliyi, uygunsuzluq heddi ve KPI teleblerini paylasin."
            fields={["Qurum qrupu", "Mesul sexs", "Email", "KPI prioriteti", "Hesabat tezliyi", "Risk heddi"]}
            buttonLabel="Nezaret telebi gonder"
          />
        </div>
      </section>

      <CtaBand
        title="Seffafliq ve hesabatliliq ucun ayri nezaret sethi vacibdir"
        description="Bu gorunus sistemin reqemsal yetkinliyini yalniz avtomatlasdirma ile deyil, olcule bilen nezaretle yukseldir."
        primary={{ label: "Nezaret panelini ac", href: "/dashboard/provider" }}
        secondary={{ label: "Pilot plani", href: "/pricing" }}
      />
    </main>
  );
}
