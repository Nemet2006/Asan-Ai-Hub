import { FormCard, PageHero, SectionIntro } from "@/components/marketing";
import { contactChannels, faqItems } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Elaqe ve pilot"
        title="Pilot hecmini, inteqrasiya noqtelerini ve emeliyyat ssenarisini birge formalasdirmag olar"
        description="Bu demo hem teqdimat, hem de texniki ilkin skelet kimi qurulub. Qurum, mehsul ve texniki terefler uzre novbeti merheleni bu bolmeden planlamaq mumkundur."
        primaryCta={{ label: "Mesaj gonder", href: "#contact-form" }}
        secondaryCta={{ label: "API modullari", href: "/courses" }}
        asideTitle="Birbasa elaqe"
        asideItems={contactChannels.map((item) => `${item.label}: ${item.value}`)}
      />

      <section className="section" id="contact-form">
        <div className="container contact-grid">
          <FormCard
            title="Pilot muracieti"
            description="Pilot kateqoriyalarini, inteqrasiya tereflerini ve gozlenilen KPI-lari paylasin."
            fields={["Qurum", "Elaqelendirici sexs", "Email", "Pilot kateqoriyasi", "Region", "Movcud sistem"]}
            buttonLabel="Pilot sorgusu gonder"
          />

          <div>
            <article className="contact-card">
              <h3>Neyi birge deqiqlasdire bilerik</h3>
              <p>
                Model coverage, media axini, API muqavilesi, audit logu, tehlukesizlik telebleri ve pilot ugur gostəricileri.
              </p>
            </article>
            <div style={{ height: 18 }} />
            <article className="card">
              <SectionIntro
                eyebrow="Tez-tez verilen suallar"
                title="Qisa cavablar"
                description="Pilotlasdirmadan evvel en cox verilen suallari bir yerde topladiq."
              />
              <ul className="check-list">
                {faqItems.map((item) => (
                  <li key={item.question}>
                    <strong>{item.question}</strong>
                    <br />
                    {item.answer}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
