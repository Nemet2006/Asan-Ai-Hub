"use client";

import { useMemo, useState } from "react";
import {
  assessmentCases,
  keywordRubric,
  skillLabels,
  type AssessmentCase,
  type SkillKey,
  type SkillScoreMap
} from "@/lib/decisionlab-data";

type Answer = {
  caseId: string;
  optionId: string;
  reason: string;
};

type CaseFeedback = {
  caseTitle: string;
  selectedLabel: string;
  feedback: string;
  reasonSignal: string;
};

const skillKeys = Object.keys(skillLabels) as SkillKey[];

function clampScore(score: number) {
  return Math.max(0, Math.min(100, Math.round(score)));
}

function createBaseScores(): SkillScoreMap {
  return {
    communication: 62,
    problemSolving: 62,
    empathy: 62,
    structure: 62,
    businessThinking: 62,
    actionOrientation: 62,
    riskAwareness: 62
  };
}

function scoreReason(reason: string): Partial<SkillScoreMap> {
  const normalized = reason.toLocaleLowerCase("az");

  return skillKeys.reduce<Partial<SkillScoreMap>>((acc, skill) => {
    const hits = keywordRubric[skill].filter((keyword) =>
      normalized.includes(keyword.toLocaleLowerCase("az"))
    ).length;

    if (hits > 0) {
      acc[skill] = Math.min(7, hits * 2);
    }

    return acc;
  }, {});
}

function calculateReport(answers: Answer[]) {
  const scores = createBaseScores();
  const feedback: CaseFeedback[] = [];

  answers.forEach((answer) => {
    const currentCase = assessmentCases.find((item) => item.id === answer.caseId);
    const option = currentCase?.options.find((item) => item.id === answer.optionId);

    if (!currentCase || !option) {
      return;
    }

    const reasonBonus = scoreReason(answer.reason);

    skillKeys.forEach((skill) => {
      scores[skill] += option.impact[skill] ?? 0;
      scores[skill] += reasonBonus[skill] ?? 0;
    });

    const reasonSignal =
      answer.reason.trim().length > 90
        ? "İzah kifayət qədər konkret idi və rubric üzrə əlavə siqnal verdi."
        : "İzah qısa idi; real AI scoring-də daha çox fakt, risk və növbəti addım tələb olunardı.";

    feedback.push({
      caseTitle: currentCase.title,
      selectedLabel: option.label,
      feedback: option.feedback,
      reasonSignal
    });
  });

  const finalScores = skillKeys.reduce<SkillScoreMap>((acc, skill) => {
    acc[skill] = clampScore(scores[skill]);
    return acc;
  }, createBaseScores());

  const sorted = [...skillKeys].sort((a, b) => finalScores[b] - finalScores[a]);
  const strongest = sorted.slice(0, 2);
  const weakest = sorted.slice(-2).reverse();
  const overall = Math.round(
    finalScores.communication * 0.18 +
      finalScores.problemSolving * 0.18 +
      finalScores.empathy * 0.14 +
      finalScores.structure * 0.14 +
      finalScores.businessThinking * 0.14 +
      finalScores.actionOrientation * 0.12 +
      finalScores.riskAwareness * 0.1
  );

  return {
    scores: finalScores,
    feedback,
    strongest,
    weakest,
    overall,
    summary: `Namizəd ${skillLabels[strongest[0]].toLocaleLowerCase(
      "az"
    )} və ${skillLabels[strongest[1]].toLocaleLowerCase(
      "az"
    )} üzrə güclü siqnal göstərdi. İnkişaf üçün əsas fokus: ${skillLabels[
      weakest[0]
    ].toLocaleLowerCase("az")} və ${skillLabels[weakest[1]].toLocaleLowerCase("az")}.`
  };
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="meter" aria-label={`${value}/100`}>
      <i style={{ width: `${value}%` }} />
    </div>
  );
}

function CaseCard({
  item,
  answer,
  onAnswer
}: {
  item: AssessmentCase;
  answer?: Answer;
  onAnswer: (answer: Answer) => void;
}) {
  const [optionId, setOptionId] = useState(answer?.optionId ?? "");
  const [reason, setReason] = useState(answer?.reason ?? "");

  return (
    <section className="assessment-card">
      <div className="case-meta">
        <span>{item.role}</span>
        <span>{item.difficulty}</span>
      </div>
      <h2>{item.title}</h2>
      <p>{item.context}</p>

      <div className="scenario-box">
        <strong>Qiymətləndirmə siqnalı</strong>
        <span>{item.successSignal}</span>
      </div>

      <div className="scenario-box warning">
        <strong>Qərar gərginliyi</strong>
        <span>{item.tension}</span>
      </div>

      <div className="option-list" role="radiogroup" aria-label="Qərar variantları">
        {item.options.map((option) => (
          <button
            className={optionId === option.id ? "option-card is-selected" : "option-card"}
            key={option.id}
            onClick={() => setOptionId(option.id)}
            type="button"
          >
            <span>{option.label}</span>
            <small>{option.description}</small>
          </button>
        ))}
      </div>

      <label className="reason-field">
        <span>Niyə bu qərarı verdin?</span>
        <textarea
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          placeholder="Qısa izah yaz: hansı faktı, riski, müştəri hissini və növbəti addımı nəzərə aldın?"
          rows={5}
        />
      </label>

      <button
        className="button"
        disabled={!optionId || reason.trim().length < 12}
        onClick={() => onAnswer({ caseId: item.id, optionId, reason })}
        type="button"
      >
        Cavabı təsdiqlə
      </button>
    </section>
  );
}

export function AssessmentExperience() {
  const [candidateName, setCandidateName] = useState("Demo namizəd");
  const [candidateRole, setCandidateRole] = useState("Customer Support Intern");
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const report = useMemo(() => {
    if (answers.length !== assessmentCases.length) {
      return null;
    }

    return calculateReport(answers);
  }, [answers]);

  function handleAnswer(answer: Answer) {
    const nextAnswers = [...answers.filter((item) => item.caseId !== answer.caseId), answer];
    setAnswers(nextAnswers);

    if (step < assessmentCases.length - 1) {
      setStep(step + 1);
      return;
    }

    const reportResult = calculateReport(nextAnswers);
    window.localStorage.setItem(
      "jobsim:lastReport",
      JSON.stringify({
        name: candidateName,
        role: candidateRole,
        status: "Reviewed",
        completedAt: new Date().toLocaleString("az-AZ"),
        scores: reportResult.scores
      })
    );
  }

  function resetAssessment() {
    setStarted(false);
    setStep(0);
    setAnswers([]);
  }

  if (!started) {
    return (
      <section className="assessment-start">
        <div className="assessment-intro">
          <span className="eyebrow">Candidate portal</span>
          <h1>Real case assessment</h1>
          <p>
            Namizəd case oxuyur, qərar variantı seçir və qısa izah yazır. Demo AI-style
            rubric scoring ilə skill report yaradır və nəticəni company dashboard-a ötürür.
          </p>
          <div className="case-grid">
            {assessmentCases.map((item) => (
              <article className="case-preview" key={item.id}>
                <span>{item.role}</span>
                <h3>{item.title}</h3>
                <p>{item.successSignal}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="start-panel">
          <label>
            <span>İştirakçı adı</span>
            <input value={candidateName} onChange={(event) => setCandidateName(event.target.value)} />
          </label>
          <label>
            <span>Hədəf rol</span>
            <select value={candidateRole} onChange={(event) => setCandidateRole(event.target.value)}>
              <option>Customer Support Intern</option>
              <option>Sales Assistant</option>
              <option>Data Analyst Intern</option>
            </select>
          </label>
          <button className="button" onClick={() => setStarted(true)} type="button">
            Assessment başlat
          </button>
        </div>
      </section>
    );
  }

  if (report) {
    return (
      <section className="report-page">
        <div className="report-header">
          <div>
            <span className="eyebrow">AI skill report</span>
            <h1>{candidateName}</h1>
            <p>{report.summary}</p>
          </div>
          <div className="report-score">
            <span>Overall</span>
            <strong>{report.overall}</strong>
          </div>
          <div className="report-actions">
            <button className="button button--ghost" onClick={resetAssessment} type="button">
              Yenidən başlat
            </button>
            <button className="button" onClick={() => window.print()} type="button">
              PDF export
            </button>
          </div>
        </div>

        <div className="dashboard-split">
          <article className="panel">
            <h2>Bacarıq breakdown</h2>
            <div className="score-list">
              {skillKeys.map((skill) => (
                <div className="score-row" key={skill}>
                  <div>
                    <strong>{skillLabels[skill]}</strong>
                    <span>{report.scores[skill]}/100</span>
                  </div>
                  <ProgressBar value={report.scores[skill]} />
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <h2>Recruiter summary</h2>
            <ul className="insight-list">
              <li>
                <strong>Güclü sahələr</strong>
                {report.strongest.map((skill) => skillLabels[skill]).join(", ")}
              </li>
              <li>
                <strong>İnkişaf riski</strong>
                {report.weakest.map((skill) => skillLabels[skill]).join(", ")}
              </li>
              <li>
                <strong>Hiring recommendation</strong>
                {report.overall >= 80 ? "Strong Fit" : report.overall >= 70 ? "Potential Fit" : "Needs Training"}
              </li>
            </ul>
          </article>
        </div>

        <article className="panel">
          <h2>Case-by-case feedback</h2>
          <div className="feedback-grid">
            {report.feedback.map((item) => (
              <div className="feedback-card" key={item.caseTitle}>
                <span>{item.caseTitle}</span>
                <strong>{item.selectedLabel}</strong>
                <p>{item.feedback}</p>
                <small>{item.reasonSignal}</small>
              </div>
            ))}
          </div>
        </article>
      </section>
    );
  }

  const activeCase = assessmentCases[step];
  const progress = Math.round(((step + 1) / assessmentCases.length) * 100);

  return (
    <section className="assessment-runner">
      <aside className="runner-rail">
        <span className="eyebrow">Assessment</span>
        <h1>
          Case {step + 1}/{assessmentCases.length}
        </h1>
        <ProgressBar value={progress} />
        <div className="participant-card">
          <strong>{candidateName}</strong>
          <span>{candidateRole}</span>
        </div>
        <ol>
          {assessmentCases.map((item, index) => (
            <li className={index === step ? "is-active" : ""} key={item.id}>
              {item.title}
            </li>
          ))}
        </ol>
      </aside>

      <CaseCard
        answer={answers.find((item) => item.caseId === activeCase.id)}
        item={activeCase}
        onAnswer={handleAnswer}
      />
    </section>
  );
}
