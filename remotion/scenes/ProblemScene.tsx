import {interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {brand} from "../config";
import {DashboardFrame, GlassCard, Pill, SceneFrame} from "../components/Layout";
import type {SceneProps} from "./types";

export const ProblemScene = ({aspect, scene}: SceneProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const isVertical = aspect === "vertical";
  const applications = interpolate(frame, [0, scene.duration * fps], [6, 24], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneFrame aspect={aspect} scene={scene}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isVertical ? "1fr" : "1fr 1fr",
          gridTemplateRows: isVertical ? "1fr 1fr" : "1fr",
          gap: 28,
          height: "100%",
          alignItems: "center",
        }}
      >
        <DashboardFrame aspect={aspect} title="Candidate workspace">
          <GlassCard style={{padding: 26, boxShadow: "none"}}>
            <div style={{display: "flex", alignItems: "center", gap: 18}}>
              <div
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #DBEAFE, #C4B5FD)",
                }}
              />
              <div>
                <div style={{fontSize: 30, fontWeight: 850, color: brand.colors.ink}}>
                  Fresh graduate
                </div>
                <div style={{fontSize: 21, color: brand.colors.inkSoft}}>
                  Strong potential, thin CV
                </div>
              </div>
            </div>
            <div style={{marginTop: 30, display: "grid", gap: 16}}>
              {["Junior analyst", "Marketing intern", "Product trainee", "HR assistant"].map(
                (role, index) => (
                  <div
                    key={role}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "17px 18px",
                      borderRadius: 8,
                      background: index < applications / 7 ? "rgba(37,99,235,0.1)" : "#F1F5F9",
                    }}
                  >
                    <span style={{fontSize: 21, fontWeight: 740, color: brand.colors.ink}}>
                      {role}
                    </span>
                    <Pill tone={index < 2 ? "amber" : "blue"}>{index < 2 ? "Pending" : "Sent"}</Pill>
                  </div>
                ),
              )}
            </div>
          </GlassCard>
        </DashboardFrame>

        <DashboardFrame aspect={aspect} title="Recruiter queue">
          <div style={{display: "grid", gap: 14}}>
            {Array.from({length: 8}).map((_, index) => {
              const width = 42 + ((index * 11) % 44);
              return (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "46px 1fr 74px",
                    gap: 16,
                    alignItems: "center",
                    padding: "15px 16px",
                    borderRadius: 8,
                    background: index === 2 ? "rgba(225,29,72,0.08)" : "rgba(248,250,252,0.92)",
                  }}
                >
                  <div style={{width: 42, height: 42, borderRadius: 8, background: "#CBD5E1"}} />
                  <div>
                    <div
                      style={{
                        width: `${width}%`,
                        height: 12,
                        borderRadius: 999,
                        background: "#94A3B8",
                      }}
                    />
                    <div
                      style={{
                        marginTop: 10,
                        width: `${Math.max(30, width - 18)}%`,
                        height: 9,
                        borderRadius: 999,
                        background: "#CBD5E1",
                      }}
                    />
                  </div>
                  <div style={{fontSize: 22, fontWeight: 850, color: brand.colors.inkSoft}}>
                    CV
                  </div>
                </div>
              );
            })}
          </div>
        </DashboardFrame>
      </div>
    </SceneFrame>
  );
};
