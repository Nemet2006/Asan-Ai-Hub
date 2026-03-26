import {
  CtaBand,
  FilterChips,
  InternshipGrid,
  PageHero,
  SectionIntro
} from "@/components/marketing";
import { analysisScenarios } from "@/lib/site-data";

const analysisFilters = [
  "Kateqoriya: Kommunal",
  "Kateqoriya: Yol",
  "Menbe: Foto",
  "Menbe: Video",
  "Prioritet: Tecili",
  "GPS aktiv",
  "Vizual landmark"
];

export default function InternshipsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Analiz ssenarileri"
        title="Platformanin vizual AI qati hansi problemleri nece tanidigini numunelerle gosterir"
        description="Bu bolme modelin hansi hallari askarlamaga fokuslandigini, hansi quruma yonlendirme etdiyini ve hansi siqnallarla qerar verdiyini izah edir."
        primaryCta={{ label: "Qurum paneli", href: "/dashboard/company" }}
        secondaryCta={{ label: "API modullari", href: "/courses" }}
        asideTitle="Bu blok neyi gosterir"
        asideItems={[
          "Numune problem tipleri",
          "Aidiyyeti qurum ve prioritet",
          "Askarlamada istifade olunan vizual siqnallar"
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Use case kitabxanasi"
            title="Pilot coverage ucun secilen vizual ssenariler"
            description="Ilk merhelede hem yuksek hecmli, hem de vizual olaraq aydin problem sinifleri secilmelidir."
          />
          <FilterChips items={analysisFilters} />
          <div style={{ height: 18 }} />
          <InternshipGrid items={analysisScenarios} />
        </div>
      </section>

      <CtaBand
        title="Dogru pilot sinifleri secmek model keyfiyyetini suretle yukseldir"
        description="Vizual cehetden aydin ve emeliyyat baximindan deyerli kateqoriyalar ilk merhelede en yaxsi neticeni verir."
        primary={{ label: "Pilot merheleleri", href: "/pricing" }}
        secondary={{ label: "Elaqe", href: "/contact" }}
      />
    </main>
  );
}
