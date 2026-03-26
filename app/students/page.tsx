import {
  CtaBand,
  ChecklistCard,
  DashboardGrid,
  DemoPanel,
  PageHero,
  SectionIntro,
  SplitHighlight
} from "@/components/marketing";
import { citizenBenefits, citizenDashboardCards } from "@/lib/site-data";

export default function StudentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Vetendas axini"
        title="Sekilden hazir muraciete kechid vetendas ucun daha sade ve daha aydin olur"
        description="Vetendas problem fotosunu ve ya videosunu elave etdikden sonra sistem avtomatik metn teklifi, kateqoriya ve prioritet hazirlayir. Bu, muracietin daha duzgun ve daha suretli qebuluna komek edir."
        primaryCta={{ label: "Vetendas panelini ac", href: "/dashboard/student" }}
        secondaryCta={{ label: "Analiz ssenarileri", href: "/internships" }}
        asideTitle="Vetendas ucun qazanclar"
        asideItems={citizenBenefits}
      />

      <SplitHighlight
        eyebrow="Istifadeci tecrubesi"
        title="Metn yazmaq cetin olduqda bele vizual melumat sistem ucun yeterli siqnal yaradir"
        description="Vetendas uzun izah yazmadan da muracietini duzgun catdira bilir. AI komekcisi muracieti basa dusulen, qisa ve strukturlasdirilmis formaya salir."
        bullets={[
          "Foto ve ya video yukle",
          "Sistem problemin tesvirini ve kateqoriyasini teklif etsin",
          "Prioritet seviyyesini ve aidiyyeti qurumu gostersin",
          "Gonderdikden sonra icra neticesini izlemek mumkun olsun"
        ]}
        panel={
          <DemoPanel
            title="Vetendas muraciet komekcisi"
            subtitle="Yukleme, AI draft ve tesdiq bir axinda birlesir."
            items={[
              { label: "Draft muddeti", value: "54 san" },
              { label: "Confidence", value: "0.92" },
              { label: "Kateqoriya", value: "Yol infrastrukturu" },
              { label: "Status", value: "Hazirdir" }
            ]}
          />
        }
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Imkanlar"
            title="Vetendasin gorduyu hisse sadedir, amma arxada guclu analitika isleyir"
            description="Mehsulun meqsedi vetendasi texniki qerarlarla yormadan muracietin keyfiyyetini yukseltmekdir."
          />
          <div className="kicker-grid">
            <ChecklistCard title="Deqiq muraciet" items={citizenBenefits.slice(0, 2)} />
            <ChecklistCard title="Seffaf izleme" items={citizenBenefits.slice(2)} />
            <article className="card">
              <h3>Guven yaradan teqdimat</h3>
              <p>
                Gonderilmeden evvel vetendas sistemin ne askarladigini, hansi kateqoriyani secdiyini ve neye gore secdiyini gore bilir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Panel onizlemesi"
            title="Vetendas komekci panelinin esas bloklari"
            description="Bu kartlar muraciet yaradilarken istifadeciye gorunen ve ya arxa planda hesablanan esas gostəricileri temsil edir."
          />
          <DashboardGrid items={citizenDashboardCards} />
        </div>
      </section>

      <CtaBand
        title="Muraciet keyfiyyetini vetendasi yormadan yukseltmek mumkundur"
        description="Bu axin vetendasin yazi yukunu azaldir, sistemin ise duzgun qerar vermesini asanlasdirir."
        primary={{ label: "Demo paneli ac", href: "/dashboard/student" }}
        secondary={{ label: "Ana sehifeye qayit", href: "/" }}
      />
    </main>
  );
}
