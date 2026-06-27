import {interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {brand} from "../config";
import {DashboardFrame, GlassCard, Pill, SceneFrame} from "../components/Layout";
import type {SceneProps} from "./types";

const candidates = [
  ["Niko B.", "Data Analyst", 91, "Strong reasoning"],
  ["Aylin R.", "Frontend", 86, "Clear delivery"],
  ["Sara M.", "Marketing", 83, "Creative tests"],
  ["Leyla S.", "HR", 74, "Good structure"],
] as const;

const fitMetrics = [
  ["Performance evidence", 92, "blue"],
  ["Role fit", 87, "purple"],
  ["Communication", 84, "cyan"],
] as const;

export const CompanyScene = ({aspect, scene}: SceneProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const isVertical = aspect === "vertical";

  return (
    <SceneFrame aspect={aspect} scene={scene}>
      <DashboardFrame aspect={aspect} title="Company hiring dashboard" style={{height: isVertical ? 1160 : 760}}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isVertical ? "1fr" : "1.1fr 0.9fr",
            gap: 26,
            height: "100%",
          }}
        >
          <GlassCard style={{padding: 26, boxShadow: "none"}}>
            <div style={{fontSize: 25, fontWeight: 850, color: brand.colors.ink}}>Candidate list</div>
            <div style={{marginTop: 22, display: "grid", gap: 14}}>
              {candidates.map(([name, role, score, strength], index) => {
                const inView = interpolate(frame, [index * 9, index * 9 + 24], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });
                const top = index < 2;
                return (
                  <div
                    key={name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: isVertical ? "1fr 112px" : "1fr 88px 140px",
                      gap: 16,
                      alignItems: "center",
                      padding: "18px 20px",
                      borderRadius: 8,
                      background: top ? "rgba(37,99,235,0.1)" : "#F1F5F9",
                      opacity: inView,
                      transform: `translateY(${(1 - inView) * 24}px)`,
                    }}
                  >
                    <div>
                      <div style={{fontSize: 23, fontWeight: 850, color: brand.colors.ink}}>
                        {name}
                      </div>
                      <div style={{fontSize: 18, color: brand.colors.inkSoft}}>
                        {role} - {strength}
                      </div>
                    </div>
                    <div style={{fontSize: 27, fontWeight: 900, color: top ? brand.colors.blue : brand.colors.inkSoft}}>
                      {score}
                    </div>
                    {!isVertical && <Pill tone={top ? "green" : "blue"}>{top ? "Shortlist" : "Review"}</Pill>}
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard style={{padding: 28, boxShadow: "none"}}>
            <div style={{fontSize: 25, fontWeight: 850, color: brand.colors.ink}}>Why this shortlist</div>
            <div style={{marginTop: 28, display: "grid", gap: 20}}>
              {fitMetrics.map(([label, value, tone], index) => (
                <div key={label}>
                  <div style={{display: "flex", justifyContent: "space-between", marginBottom: 12}}>
                    <span style={{fontSize: 22, fontWeight: 780, color: brand.colors.ink}}>
                      {label}
                    </span>
                    <span style={{fontSize: 22, fontWeight: 850, color: brand.colors[tone]}}>
                      {value}
                    </span>
                  </div>
                  <div style={{height: 16, borderRadius: 999, background: "#E2E8F0"}}>
                    <div
                      style={{
                        width: `${interpolate(frame, [fps + index * 12, 2.1 * fps + index * 12], [0, Number(value)], {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                        })}%`,
                        height: "100%",
                        borderRadius: 999,
                        background: brand.colors[tone],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 34,
                padding: "22px 24px",
                borderRadius: 8,
                background: brand.colors.ink,
                color: brand.colors.white,
                fontSize: 26,
                fontWeight: 860,
                textAlign: "center",
              }}
            >
              Invite top candidates
            </div>
          </GlassCard>
        </div>
      </DashboardFrame>
    </SceneFrame>
  );
};
