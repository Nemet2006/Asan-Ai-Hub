import {interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {brand} from "../config";
import {DashboardFrame, GlassCard, Pill, SceneFrame} from "../components/Layout";
import type {SceneProps} from "./types";

const metrics = [
  ["Problem Solving", 88, "blue"],
  ["Technical Accuracy", 82, "purple"],
  ["Communication", 91, "cyan"],
  ["Creativity", 76, "amber"],
] as const;

export const AnalysisScene = ({aspect, scene}: SceneProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const isVertical = aspect === "vertical";
  const reportIn = interpolate(frame, [5.8 * fps, 7.2 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneFrame aspect={aspect} scene={scene}>
      <DashboardFrame aspect={aspect} title="AI evaluation engine" style={{height: isVertical ? 1160 : 760}}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isVertical ? "1fr" : "1fr 0.86fr",
            gap: 26,
            height: "100%",
          }}
        >
          <GlassCard style={{padding: 28, boxShadow: "none"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <div style={{fontSize: 25, fontWeight: 850, color: brand.colors.ink}}>Response analysis</div>
              <Pill tone="green">Live</Pill>
            </div>
            <div style={{marginTop: 34, display: "grid", gap: isVertical ? 30 : 24}}>
              {metrics.map(([label, value, tone], index) => {
                const width = interpolate(frame, [index * 12, 1.3 * fps + index * 12], [0, value], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });
                return (
                  <div key={label}>
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: 12}}>
                      <span style={{fontSize: 24, fontWeight: 780, color: brand.colors.ink}}>
                        {label}
                      </span>
                      <span style={{fontSize: 24, fontWeight: 850, color: brand.colors[tone]}}>
                        {Math.round(width)}
                      </span>
                    </div>
                    <div style={{height: 18, borderRadius: 999, background: "#E2E8F0", overflow: "hidden"}}>
                      <div
                        style={{
                          width: `${width}%`,
                          height: "100%",
                          borderRadius: 999,
                          background: brand.colors[tone],
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard
            style={{
              padding: 30,
              boxShadow: "none",
              opacity: reportIn,
              transform: `translateX(${(1 - reportIn) * 44}px) scale(${0.95 + reportIn * 0.05})`,
            }}
          >
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <div style={{fontSize: 28, fontWeight: 880, color: brand.colors.ink}}>Skill Report</div>
              <div
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 999,
                  display: "grid",
                  placeItems: "center",
                  background: "conic-gradient(#16A34A 0deg 310deg, #E2E8F0 310deg)",
                  color: brand.colors.ink,
                  fontSize: 34,
                  fontWeight: 900,
                }}
              >
                86
              </div>
            </div>
            <div style={{marginTop: 26, display: "grid", gap: 16}}>
              {["Clear hypothesis", "Good data instincts", "Actionable next step"].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "17px 18px",
                    borderRadius: 8,
                    background: "rgba(22,163,74,0.1)",
                    color: brand.colors.ink,
                    fontSize: 22,
                    fontWeight: 740,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div style={{marginTop: 26, fontSize: 22, lineHeight: 1.35, color: brand.colors.inkSoft}}>
              Recommended for junior analyst shortlist. Needs more evidence on SQL depth.
            </div>
          </GlassCard>
        </div>
      </DashboardFrame>
    </SceneFrame>
  );
};
