import { BlogGrid, CtaBand, PageHero, SectionIntro } from "@/components/marketing";
import { guides } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Senedler ve deliverable-lar"
        title="Hell yalniz teqdimat metni deyil, arxitektura ve idareetme mentiqi ile birlikde senedlesdirilib"
        description="Layihede README, mehsul blueprint-i, wireframe-ler, server API scaffold-u ve PostgreSQL melumat modeli birlikde yenilenib."
        primaryCta={{ label: "Ana sehifeye bax", href: "/" }}
        secondaryCta={{ label: "API modullari", href: "/courses" }}
        asideTitle="Bu bolmede ne var"
        asideItems={[
          "Strategiya ve deyer teklifi",
          "Texniki memarliq ve endpoint-ler",
          "Risk, KPI ve pilot senedlesmesi"
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Sened paketi"
            title="Qiymetlendirme ve teqdimat ucun istifade oluna bilen materiallar"
            description="Bu kartlar layihede movcud olan esas deliverable-larin mezmununu qisa sekilde toplayir."
          />
          <BlogGrid items={guides} />
        </div>
      </section>

      <CtaBand
        title="Mehsul ve texniki teqdimati eyni layihə icinde saxlamaq icra prosesini suretlendirir"
        description="Belelikle, ideya, demo ve inteqrasiya skeleti bir-birinden ayrilmir."
        primary={{ label: "Ana sehifeye don", href: "/" }}
        secondary={{ label: "Pilot plani", href: "/pricing" }}
      />
    </main>
  );
}
