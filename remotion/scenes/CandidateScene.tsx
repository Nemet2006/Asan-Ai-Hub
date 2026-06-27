import {Easing, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {brand} from "../config";
import {CursorPointer, DashboardFrame, GlassCard, Pill, SceneFrame} from "../components/Layout";
import type {SceneProps} from "./types";

const fields = ["Data Analyst", "Frontend Developer", "Marketing", "HR"];

export const CandidateScene = ({aspect, scene}: SceneProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const isVertical = aspect === "vertical";
  const fieldProgress = interpolate(frame, [0, 1.8 * fps], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taskIn = interpolate(frame, [2.1 * fps, 3.3 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const answerIn = interpolate(frame, [4.2 * fps, 5.3 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const typed = Math.floor(interpolate(frame, [5.3 * fps, 9.2 * fps], [0, 165], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }));
  const answer =
    "I would segment users by activation stage, compare completion drop-off, and recommend a targeted onboarding experiment for the weakest cohort.";

  return (
    <SceneFrame aspect={aspect} scene={scene}>
      <DashboardFrame aspect={aspect} title="Candidate simulation" style={{height: isVertical ? 1160 : 760}}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isVertical ? "1fr" : "0.8fr 1.2fr",
            gap: 26,
            height: "100%",
            position: "relative",
          }}
        >
          <GlassCard style={{padding: 26, boxShadow: "none"}}>
            <div style={{fontSize: 24, fontWeight: 800, color: brand.colors.ink}}>Choose field</div>
            <div style={{marginTop: 20, display: "grid", gap: 14}}>
              {fields.map((field, index) => {
                const active = index === 0;
                return (
                  <div
                    key={field}
                    style={{
                      padding: "18px 18px",
                      borderRadius: 8,
                      background: active ? "linear-gradient(135deg, #2563EB, #06B6D4)" : "#F1F5F9",
                      color: active ? brand.colors.white : brand.colors.ink,
                      fontSize: 22,
                      fontWeight: 760,
                      opacity: interpolate(fieldProgress, [0, 1], [0.45, 1]),
                      transform: `translateX(${(1 - fieldProgress) * (index + 1) * -22}px)`,
                    }}
                  >
                    {field}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                marginTop: 24,
                padding: "18px 20px",
                borderRadius: 8,
                background: brand.colors.ink,
                color: brand.colors.white,
                textAlign: "center",
                fontSize: 22,
                fontWeight: 830,
              }}
            >
              Start Simulation
            </div>
          </GlassCard>

          <div style={{display: "grid", gridTemplateRows: "0.76fr 1fr", gap: 22, minHeight: 0}}>
            <GlassCard
              style={{
                padding: 26,
                boxShadow: "none",
                opacity: taskIn,
                transform: `translateY(${(1 - taskIn) * 34}px)`,
              }}
            >
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{fontSize: 25, fontWeight: 850, color: brand.colors.ink}}>Mini task</div>
                <Pill tone="cyan">18 min</Pill>
              </div>
              <div style={{marginTop: 20, fontSize: 32, lineHeight: 1.12, fontWeight: 850, color: brand.colors.ink}}>
                A subscription app saw activation fall by 18%. What would you investigate first?
              </div>
            </GlassCard>

            <GlassCard
              style={{
                padding: 26,
                boxShadow: "none",
                opacity: answerIn,
                transform: `translateY(${(1 - answerIn) * 34}px)`,
              }}
            >
              <div style={{fontSize: 24, fontWeight: 850, color: brand.colors.ink}}>Answer editor</div>
              <div
                style={{
                  marginTop: 18,
                  minHeight: isVertical ? 260 : 210,
                  padding: 22,
                  borderRadius: 8,
                  background: "#0F172A",
                  color: "#D8E2F0",
                  fontSize: 25,
                  lineHeight: 1.38,
                  fontWeight: 560,
                }}
              >
                {answer.slice(0, typed)}
                <span style={{color: brand.colors.cyan}}>|</span>
              </div>
              <div
                style={{
                  marginTop: 18,
                  display: "inline-flex",
                  padding: "15px 20px",
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                  color: brand.colors.white,
                  fontSize: 22,
                  fontWeight: 820,
                }}
              >
                Submit answer
              </div>
            </GlassCard>
          </div>
          <CursorPointer x={isVertical ? 700 : 820} y={isVertical ? 770 : 460} scale={isVertical ? 1.1 : 0.95} />
        </div>
      </DashboardFrame>
    </SceneFrame>
  );
};
