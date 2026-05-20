"use client";

import { useEffect, useMemo, useState } from "react";
import {
  campaigns,
  mockCandidates,
  skillLabels,
  type Candidate,
  type SkillKey,
  type SkillScoreMap
} from "@/lib/decisionlab-data";

const skillKeys = Object.keys(skillLabels) as SkillKey[];

function average(values: number[]) {
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function candidateAverage(candidate: Candidate) {
  return average(skillKeys.map((skill) => candidate.scores[skill]));
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="meter" aria-label={`${value}/100`}>
      <i style={{ width: `${value}%` }} />
    </div>
  );
}

function isStoredCandidate(value: unknown): value is Candidate {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Candidate;
  return Boolean(item.name && item.role && item.completedAt && item.scores);
}

export function AdminDashboard() {
  const [latestCandidate, setLatestCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem("jobsim:lastReport");

    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as unknown;

      if (isStoredCandidate(parsed)) {
        setLatestCandidate(parsed);
      }
    } catch {
      setLatestCandidate(null);
    }
  }, []);

  const candidates = useMemo(() => {
    if (!latestCandidate) {
      return mockCandidates;
    }

    return [latestCandidate, ...mockCandidates];
  }, [latestCandidate]);

  const skillAverages = useMemo<SkillScoreMap>(() => {
    return skillKeys.reduce<SkillScoreMap>((acc, skill) => {
      acc[skill] = average(candidates.map((candidate) => candidate.scores[skill]));
      return acc;
    }, {} as SkillScoreMap);
  }, [candidates]);

  const rankedCandidates = useMemo(() => {
    return [...candidates].sort((a, b) => candidateAverage(b) - candidateAverage(a));
  }, [candidates]);

  const weakestSkills = [...skillKeys]
    .sort((a, b) => skillAverages[a] - skillAverages[b])
    .slice(0, 3);

  const strongestSkills = [...skillKeys]
    .sort((a, b) => skillAverages[b] - skillAverages[a])
    .slice(0, 3);

  const cohortAverage = average(candidates.map(candidateAverage));
  const completionRate = Math.round(
    (campaigns.reduce((sum, item) => sum + item.completed, 0) /
      campaigns.reduce((sum, item) => sum + item.invited, 0)) *
      100
  );

  return (
    <section className="admin-page">
      <div className="admin-header">
        <div>
          <span className="eyebrow">Company dashboard</span>
          <h1>AzerRetail junior hiring campaign</h1>
          <p>
            Assessment nəticələri, AI recruiter summary, shortlist statusları və cohort skill
            trend-ləri bir ekranda göstərilir.
          </p>
        </div>
        <button className="button" onClick={() => window.print()} type="button">
          PDF export
        </button>
      </div>

      <div className="kpi-grid">
        <article className="kpi-card">
          <span>Invited candidates</span>
          <strong>{campaigns.reduce((sum, item) => sum + item.invited, 0)}</strong>
          <small>3 aktiv rol üzrə dəvət göndərilib</small>
        </article>
        <article className="kpi-card">
          <span>Completion rate</span>
          <strong>{completionRate}%</strong>
          <small>Invitation link tamamlanma nisbəti</small>
        </article>
        <article className="kpi-card">
          <span>Cohort average</span>
          <strong>{cohortAverage}/100</strong>
          <small>Weighted skill average</small>
        </article>
        <article className="kpi-card accent">
          <span>Top candidate</span>
          <strong>{rankedCandidates[0].name}</strong>
          <small>{candidateAverage(rankedCandidates[0])}/100 overall</small>
        </article>
      </div>

      <div className="dashboard-split">
        <article className="panel">
          <div className="panel-head">
            <div>
              <span className="eyebrow">Skill analytics</span>
              <h2>Cohort breakdown</h2>
            </div>
          </div>
          <div className="score-list">
            {skillKeys.map((skill) => (
              <div className="score-row" key={skill}>
                <div>
                  <strong>{skillLabels[skill]}</strong>
                  <span>{skillAverages[skill]}/100</span>
                </div>
                <ProgressBar value={skillAverages[skill]} />
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <span className="eyebrow">AI recruiter summary</span>
              <h2>Decision support</h2>
            </div>
          </div>
          <ul className="insight-list">
            <li>
              <strong>Ən zəif bacarıqlar</strong>
              {weakestSkills.map((skill) => skillLabels[skill]).join(", ")}
            </li>
            <li>
              <strong>Ən güclü bacarıqlar</strong>
              {strongestSkills.map((skill) => skillLabels[skill]).join(", ")}
            </li>
            <li>
              <strong>Tövsiyə</strong>
              Shortlist qərarı final hiring decision kimi yox, müsahibə və praktiki tapşırıqla
              birlikdə decision support kimi istifadə olunmalıdır.
            </li>
          </ul>
        </article>
      </div>

      <article className="panel">
        <div className="panel-head">
          <div>
            <span className="eyebrow">Ranking table</span>
            <h2>Candidate comparison</h2>
          </div>
          <div className="status-row">
            <span>Shortlisted</span>
            <span>Reviewed</span>
            <span>Pending</span>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Role</th>
                <th>Status</th>
                <th>Overall</th>
                <th>Communication</th>
                <th>Problem solving</th>
                <th>Risk</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rankedCandidates.map((candidate) => (
                <tr key={`${candidate.name}-${candidate.completedAt}`}>
                  <td>
                    <strong>{candidate.name}</strong>
                    <span>{candidate.completedAt}</span>
                  </td>
                  <td>{candidate.role}</td>
                  <td>
                    <span className={`status-pill ${candidate.status.toLowerCase()}`}>
                      {candidate.status}
                    </span>
                  </td>
                  <td>
                    <strong>{candidateAverage(candidate)}/100</strong>
                  </td>
                  <td>{candidate.scores.communication}/100</td>
                  <td>{candidate.scores.problemSolving}/100</td>
                  <td>{candidate.scores.riskAwareness}/100</td>
                  <td>
                    <button className="table-action" type="button">
                      View report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <div className="dashboard-split">
        <article className="panel">
          <div className="panel-head">
            <div>
              <span className="eyebrow">Campaigns</span>
              <h2>Assessment status</h2>
            </div>
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
                  <ProgressBar value={Math.round((campaign.completed / campaign.invited) * 100)} />
                </div>
                <small>{campaign.status}</small>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <span className="eyebrow">Evaluation queue</span>
              <h2>AI job monitor</h2>
            </div>
          </div>
          <div className="queue-list">
            <div>
              <span className="queue-dot done" />
              <strong>JSON schema validation</strong>
              <small>Completed</small>
            </div>
            <div>
              <span className="queue-dot active" />
              <strong>Prompt v3 support rubric</strong>
              <small>Processing</small>
            </div>
            <div>
              <span className="queue-dot retry" />
              <strong>Invalid AI response retry</strong>
              <small>Retrying</small>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
