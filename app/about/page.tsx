import { CtaBand, PageHero, SectionIntro } from "@/components/marketing";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Cagirishin konteksti"
        title="Esas problem muracietin qebulunda deyil, vizual subutun sistemli istifadesindedir"
        description="Hazirki emeliyyat modelinde foto ve videolar cox vaxt en guclu subut menbeyi olsa da, onlarin analizi, tesnifati ve sonradan dogrulanmasi esasen manual aparilir. Teklif olunan hell bu boslugu AI esasli qerar desteyi ile baglayir."
        primaryCta={{ label: "Ana helli gor", href: "/" }}
        secondaryCta={{ label: "Pilot planini ac", href: "/pricing" }}
        asideTitle="Bu hell neyi deyisir"
        asideItems={[
          "Natamam metnli muracietleri vizual siqnallarla tamamlayir",
          "Duzgun kateqoriya ve aidiyyet secimini guclendirir",
          "Qurum cavabinin ilkin muracietle uygunlugunu olcur"
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Niye indi"
            title="Vizual melumat hecmi artdiqca manual model hem baha, hem de zeif olcule bilen olur"
            description="Dovlet-vetendas munasibetlerinde suret, seffafliq ve obyektivlik eyni anda vacibdir. Vizual AI qatinin inteqrasiyasi mehz bu uc gostəricini guclendiren struktur deyisiklik yaradir."
          />
          <div className="kicker-grid">
            <article className="about-card">
              <h3>Problemin koku</h3>
              <p>
                Vetendasin teqdim etdiyi metn cox vaxt natamam olur, halbuki esas melumat foto ve ya videoda gizlenir.
              </p>
            </article>
            <article className="about-card">
              <h3>Hell prinsipi</h3>
              <p>
                Vizual siqnallar esasinda avtomatik tesnifat, risk skoru, draft metn ve netice dogrulamasi.
              </p>
            </article>
            <article className="about-card">
              <h3>Gozlenilen netice</h3>
              <p>
                Daha duzgun yonlendirme, daha qisa cavab muddeti, daha guclu audit izi ve vetendas etimadi.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <article className="card">
            <span className="eyebrow">Qerar mentiqi</span>
            <h2>AI qerari insani evez etmir, onun baxisini daha olcule bilen edir</h2>
            <ul className="check-list">
              <li>Confidence asagi olduqda sistem operatoru manual baxisa yonlendirir.</li>
              <li>Kateqoriya, prioritet ve dogrulama neticesi izahli siqnallarla teqdim olunur.</li>
              <li>Qerar override-lari gelecek model tekmillesmesi ucun feedback kimi saxlanilir.</li>
              <li>Audit logu her media faylinin ve qerarin hansi merheleden kechdiyini izleye bilir.</li>
            </ul>
          </article>

          <article className="card">
            <span className="eyebrow">Tehlukesizlik</span>
            <h2>Media fayllari ve model neticeleri mexfilik cerchivesi daxilinde idare olunur</h2>
            <p>
              Rol esasli giris, saxlanma siyaseti, audit trail, anonimlesdirme ve model versiyalasdirma istehsal muhitine cixis ucun esas sertler kimi nezerde tutulub.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Cagirisha uygun mehsul dili artiq islek demo formasinda qurulub"
        description="Novbeti addim pilot hedeflerini, inteqrasiya noqtelerini ve ilkin KPI-lari secmekdir."
        primary={{ label: "Demo panelleri ac", href: "/dashboard" }}
        secondary={{ label: "Elaqe formasi", href: "/contact" }}
      />
    </main>
  );
}
