import Link from "next/link";
import {
  assessmentCases,
  campaigns,
  mockCandidates,
  roadmapRows,
  roleCards,
  skillLabels
} from "@/lib/decisionlab-data";

const skillItems = Object.values(skillLabels);

function average(values: number[]) {
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

const topCandidate = mockCandidates[0];
const averageScore = average(
  mockCandidates.flatMap((candidate) => Object.values(candidate.scores))
);

export default function HomePage() {
  return (
    <main>
      <section className="product-workspace">
        <div className="container workspace-grid">
          <aside className="workspace-sidebar" aria-label="JobSim AI workspace">
            <div className="workspace-logo">
              <span>JS</span>
              <div>
                <strong>JobSim AI</strong>
                <small>Talent simulation OS</small>
              </div>
            </div>

            <nav className="workspace-menu" aria-label="Product modules">
              <a className="is-active" href="#overview">Overview</a>
              <a href="#campaigns">Campaigns</a>
              <a href="#roles">Roles</a>
              <a href="#pipeline">AI pipeline</a>
            </nav>

            <div className="workspace-note">
              <span>Live MVP demo</span>
              <strong>4 case engine</strong>
              <p>Candidate flow, AI-style scoring və company dashboard local data ilə işləyir.</p>
            </div>
          </aside>

          <div className="workspace-main">
            <div className="workspace-topbar">
              <div>
                <span className="eyebrow">Pinterest-inspired SaaS dashboard</span>
                <h1>JobSim AI</h1>
                <p>
                  CV əvəzinə real iş simulyasiyaları ilə junior namizədlərin kommunikasiya,
                  problem həlli və rol-spesifik bacarıqlarını ölçən assessment platforması.
                </p>
              </div>
              <div className="hero-actions">
                <Link className="button button--ghost" href="/admin">
                  Company dashboard
                </Link>
                <Link className="button" href="/assessment">
                  Assessment başlat
                </Link>
              </div>
            </div>

            <div className="kpi-grid" id="overview">
              <article className="kpi-card">
                <span>Active campaigns</span>
                <strong>{campaigns.filter((item) => item.status === "Active").length}</strong>
                <small>Customer Support və Sales pilotları açıqdır</small>
              </article>
              <article className="kpi-card">
                <span>Completed simulations</span>
                <strong>{campaigns.reduce((sum, item) => sum + item.completed, 0)}</strong>
                <small>Mock cohort nəticələri ranking-ə düşür</small>
              </article>
              <article className="kpi-card">
                <span>Average score</span>
                <strong>{averageScore}/100</strong>
                <small>7 bacarıq üzrə ümumi orta</small>
              </article>
              <article className="kpi-card accent">
                <span>Top candidate</span>
                <strong>{topCandidate.name}</strong>
                <small>{topCandidate.role}</small>
              </article>
            </div>

            <div className="dashboard-split">
              <section className="panel" id="campaigns">
                <div className="panel-head">
                  <div>
                    <span className="eyebrow">Company view</span>
                    <h2>Assessment campaigns</h2>
                  </div>
                  <Link href="/admin" className="icon-button" aria-label="Open dashboard">
                    →
                  </Link>
                </div>

                <div className="campaign-list">
                  {campaigns.map((campaign) => (
                    <article className="campaign-row" key={campaign.title}>
                      <div>
                        <strong>{campaign.title}</strong>
                        <span>{campaign.role}</span>
                      </div>
                      <div className="campaign-progress">
                        <span>
                          {campaign.completed}/{campaign.invited}
                        </span>
                        <div className="meter">
                          <i style={{ width: `${(campaign.completed / campaign.invited) * 100}%` }} />
                        </div>
                      </div>
                      <small>{campaign.deadline}</small>
                    </article>
                  ))}
                </div>
              </section>

              <section className="panel visual-panel">
                <div className="ai-card">
                  <div className="ai-orbit" />
                  <span>AI evaluation</span>
                  <strong>Structured JSON scoring</strong>
                  <p>
                    Prompt version, rubric criteria, raw response və risk flags report üçün saxlanılır.
                  </p>
                </div>
                <div className="mini-chart" aria-label="Skill score visual">
                  {skillItems.slice(0, 7).map((skill, index) => (
                    <span
                      key={skill}
                      title={skill}
                      style={{ height: `${44 + index * 7}px` }}
                    />
                  ))}
                </div>
              </section>
            </div>

            <section className="panel" id="roles">
              <div className="panel-head">
                <div>
                  <span className="eyebrow">Simulation catalog</span>
                  <h2>Rol əsaslı case engine</h2>
                </div>
                <Link className="button button--ghost" href="/assessment">
                  Demo case aç
                </Link>
              </div>

              <div className="role-grid">
                {roleCards.map((item) => (
                  <article className={`role-card ${item.color}`} key={item.role}>
                    <span>{item.cases} case</span>
                    <h3>{item.role}</h3>
                    <div className="tag-row">
                      {item.skills.map((skill) => (
                        <small key={skill}>{skill}</small>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="dashboard-split">
              <section className="panel" id="pipeline">
                <div className="panel-head">
                  <div>
                    <span className="eyebrow">Candidate flow</span>
                    <h2>İşlək assessment axını</h2>
                  </div>
                </div>
                <ol className="timeline-list">
                  {[
                    "Namizəd invitation link ilə daxil olur",
                    "Case scenario oxuyur və qərar seçir",
                    "İzah mətni rubric keyword-ləri ilə əlavə skor verir",
                    "Skill report və company ranking avtomatik yenilənir"
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>

              <section className="panel">
                <div className="panel-head">
                  <div>
                    <span className="eyebrow">Roadmap</span>
                    <h2>MVP-dən backend-ə</h2>
                  </div>
                </div>
                <div className="roadmap-list">
                  {roadmapRows.map((row) => (
                    <div key={row.area}>
                      <strong>{row.area}</strong>
                      <span>{row.scope}</span>
                      <small>{row.status}</small>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="panel">
              <div className="panel-head">
                <div>
                  <span className="eyebrow">Case preview</span>
                  <h2>Hazır simulyasiya tapşırıqları</h2>
                </div>
              </div>
              <div className="case-grid">
                {assessmentCases.map((item) => (
                  <article className="case-preview" key={item.id}>
                    <span>{item.role}</span>
                    <h3>{item.title}</h3>
                    <p>{item.successSignal}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
