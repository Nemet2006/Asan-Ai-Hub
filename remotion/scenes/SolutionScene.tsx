import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {brand} from "../config";
import {BrandLockup, DashboardFrame, GlassCard, SceneFrame} from "../components/Layout";
import type {SceneProps} from "./types";

export const SolutionScene = ({aspect, scene}: SceneProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const isVertical = aspect === "vertical";
  const open = interpolate(frame, [0.4 * fps, 1.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <AbsoluteFill style={{background: "linear-gradient(135deg, #08111F, #111827 54%, #0E7490)"}} />
      <SceneFrame aspect={aspect} scene={scene} tone="dark">
        <div style={{display: "grid", alignItems: "center", height: "100%"}}>
          <DashboardFrame
            aspect={aspect}
            title="Simulation Builder"
            dark
            style={{
              height: isVertical ? 940 : 660,
              transform: `scale(${0.86 + open * 0.14})`,
              opacity: open,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isVertical ? "1fr" : "1.1fr 0.9fr",
                gap: 24,
                height: "100%",
              }}
            >
              <GlassCard dark style={{padding: 28, boxShadow: "none"}}>
                <BrandLockup dark />
                <div
                  style={{
                    marginTop: 40,
                    fontSize: isVertical ? 52 : 42,
                    lineHeight: 1.05,
                    fontWeight: 850,
                    color: brand.colors.white,
                  }}
                >
                  Real work tasks replace empty screening.
                </div>
                <div style={{marginTop: 28, display: "grid", gap: 18}}>
                  {["Role-specific prompt", "Structured answer", "AI feedback", "Skill report"].map(
                    (item, index) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          opacity: interpolate(frame, [fps + index * 8, fps + 24 + index * 8], [0, 1], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                          }),
                        }}
                      >
                        <div
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: 999,
                            background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                          }}
                        />
                        <span style={{fontSize: 25, color: "#D8E2F0", fontWeight: 720}}>
                          {item}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </GlassCard>
              <GlassCard dark style={{padding: 28, boxShadow: "none"}}>
                <div style={{fontSize: 24, color: "#D8E2F0", fontWeight: 760}}>Live simulation</div>
                <div
                  style={{
                    marginTop: 26,
                    padding: 24,
                    borderRadius: 8,
                    background: "rgba(37,99,235,0.14)",
                    border: "1px solid rgba(96,165,250,0.24)",
                  }}
                >
                  <div style={{fontSize: 27, color: brand.colors.white, fontWeight: 820}}>
                    Analyze a launch dataset
                  </div>
                  <div style={{marginTop: 16, fontSize: 21, color: "#C7D2FE", lineHeight: 1.35}}>
                    Identify conversion risks and recommend the next experiment.
                  </div>
                </div>
                <div style={{marginTop: 28, display: "grid", gap: 14}}>
                  {[82, 64, 92].map((value, index) => (
                    <div key={value} style={{height: 16, borderRadius: 999, background: "rgba(255,255,255,0.08)"}}>
                      <div
                        style={{
                          width: `${interpolate(frame, [fps + index * 9, fps + 36 + index * 9], [0, value], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                          })}%`,
                          height: "100%",
                          borderRadius: 999,
                          background: index === 1 ? brand.colors.purple : brand.colors.cyan,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </DashboardFrame>
        </div>
      </SceneFrame>
    </>
  );
};
