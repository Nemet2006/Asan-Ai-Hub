import type { ReactNode } from "react";
import Link from "next/link";
import type {
  AnalysisScenario,
  ApiModule,
  DashboardCard,
  Feature,
  Guide,
  RolloutPhase,
  Step,
  Testimonial
} from "@/lib/site-data";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  asideTitle?: string;
  asideItems?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  asideTitle,
  asideItems
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <Link href={primaryCta.href} className="button">
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link href={secondaryCta.href} className="button button--ghost">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        {asideTitle && asideItems ? (
          <aside className="glass-card page-hero__aside">
            <h3>{asideTitle}</h3>
            <ul className="check-list">
              {asideItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </section>
  );
}

export function StepsGrid({ steps }: { steps: Step[] }) {
  return (
    <div className="steps-grid">
      {steps.map((step, index) => (
        <article key={step.title} className="card step-card">
          <span className="step-index">0{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <small>{step.detail}</small>
        </article>
      ))}
    </div>
  );
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="feature-grid">
      {features.map((feature) => (
        <article key={feature.title} className="card feature-card">
          <span className="pill">{feature.badge}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

export function LogoCloud({
  items
}: {
  items: Array<{ name: string; sector: string }>;
}) {
  return (
    <div className="logo-cloud">
      {items.map((item) => (
        <div key={item.name} className="logo-cloud__item">
          <strong>{item.name}</strong>
          <span>{item.sector}</span>
        </div>
      ))}
    </div>
  );
}

export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  return (
    <div className="testimonial-grid">
      {items.map((item) => (
        <article key={item.name} className="card testimonial-card">
          <p>"{item.quote}"</p>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </article>
      ))}
    </div>
  );
}

export function ChecklistCard({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="card checklist-card">
      <h3>{title}</h3>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function FilterChips({ items }: { items: string[] }) {
  return (
    <div className="filter-chips">
      {items.map((item) => (
        <span key={item} className="chip">
          {item}
        </span>
      ))}
    </div>
  );
}

export function InternshipGrid({ items }: { items: AnalysisScenario[] }) {
  return (
    <div className="market-grid">
      {items.map((scenario) => (
        <article key={`${scenario.institution}-${scenario.title}`} className="card market-card">
          <div className="market-card__header">
            <div>
              <span className="pill">{scenario.category}</span>
              <h3>{scenario.title}</h3>
            </div>
            <div className="market-meta">
              <strong>{scenario.institution}</strong>
              <span>{scenario.location}</span>
            </div>
          </div>
          <p>{scenario.description}</p>
          <div className="tag-row">
            <span>{scenario.evidenceType}</span>
            <span>{scenario.priority}</span>
            <span>AI triage</span>
          </div>
          <div className="skill-tags">
            {scenario.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
          <Link href="/dashboard/company" className="button button--ghost">
            Analiz nümunəsi
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CourseGrid({ items }: { items: ApiModule[] }) {
  return (
    <div className="market-grid">
      {items.map((module) => (
        <article key={`${module.endpoint}-${module.title}`} className="card market-card">
          <div className="market-card__header">
            <div>
              <span className="pill">{module.category}</span>
              <h3>{module.title}</h3>
            </div>
            <div className="market-meta">
              <strong>{module.endpoint}</strong>
              <span>{module.auth}</span>
            </div>
          </div>
          <p>{module.output}</p>
          <div className="tag-row">
            <span>{module.latency}</span>
            <span>API hazır</span>
          </div>
          <div className="skill-tags">
            {module.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link href="/blog" className="button button--ghost">
            Müqaviləni gör
          </Link>
        </article>
      ))}
    </div>
  );
}

export function PricingGrid({ items }: { items: RolloutPhase[] }) {
  return (
    <div className="pricing-grid">
      {items.map((phase) => (
        <article
          key={phase.name}
          className={`card pricing-card${phase.featured ? " pricing-card--featured" : ""}`}
        >
          <span className="pill">{phase.audience}</span>
          <h3>{phase.name}</h3>
          <strong className="pricing-price">{phase.timeline}</strong>
          <p>{phase.summary}</p>
          <ul className="check-list">
            {phase.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Link href="/contact" className="button">
            Pilotu planla
          </Link>
        </article>
      ))}
    </div>
  );
}

export function BlogGrid({ items }: { items: Guide[] }) {
  return (
    <div className="blog-grid">
      {items.map((guide) => (
        <article key={guide.title} className="card blog-card">
          <div className="tag-row">
            <span>{guide.category}</span>
            <span>{guide.readTime}</span>
          </div>
          <h3>{guide.title}</h3>
          <p>{guide.summary}</p>
          <Link href="/about" className="text-link">
            Qısa icmalı aç
          </Link>
        </article>
      ))}
    </div>
  );
}

export function DashboardGrid({ items }: { items: DashboardCard[] }) {
  return (
    <div className="dashboard-grid">
      {items.map((card) => (
        <article key={card.title} className="card dashboard-card">
          <span>{card.title}</span>
          <strong>{card.metric}</strong>
          <p>{card.description}</p>
          {card.trend ? <small>{card.trend}</small> : null}
        </article>
      ))}
    </div>
  );
}

export function DemoPanel({
  title,
  subtitle,
  items
}: {
  title: string;
  subtitle: string;
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="demo-panel">
      <div className="demo-panel__header">
        <div>
          <span className="pill">Canlı demo baxışı</span>
          <h3>{title}</h3>
        </div>
        <p>{subtitle}</p>
      </div>
      <div className="demo-panel__body">
        {items.map((item) => (
          <div key={item.label} className="demo-panel__metric">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SplitHighlight({
  eyebrow,
  title,
  description,
  bullets,
  panel
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  panel: ReactNode;
}) {
  return (
    <section className="split-highlight">
      <div className="container split-highlight__grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="check-list">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        {panel}
      </div>
    </section>
  );
}

export function FormCard({
  title,
  description,
  fields,
  buttonLabel
}: {
  title: string;
  description: string;
  fields: string[];
  buttonLabel: string;
}) {
  return (
    <form className="card form-card">
      <div className="section-intro">
        <span className="eyebrow">Əlaqə forması</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field}>
            <span>{field}</span>
            <input type="text" placeholder={`${field} daxil edin`} />
          </label>
        ))}
        <label className="form-grid__full">
          <span>Mesaj</span>
          <textarea
            rows={5}
            placeholder="Pilot hədəfi, inteqrasiya ehtiyacı və ya əməliyyat problemi barədə qısa məlumat yazın."
          />
        </label>
      </div>
      <button type="button" className="button">
        {buttonLabel}
      </button>
    </form>
  );
}

export function CtaBand({
  title,
  description,
  primary,
  secondary
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__content">
        <div>
          <span className="eyebrow">Növbəti addım</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="hero-actions">
          <Link href={primary.href} className="button">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="button button--ghost">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
