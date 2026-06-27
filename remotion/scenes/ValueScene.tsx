import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {brand} from "../config";
import {GlassCard, SceneFrame} from "../components/Layout";
import type {SceneProps} from "./types";

export const ValueScene = ({aspect, scene}: SceneProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const isVertical = aspect === "vertical";

  return (
    <>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08) 48%, rgba(6,182,212,0.11))",
        }}
      />
      <SceneFrame aspect={aspect} scene={scene}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isVertical ? "1fr" : "1fr 1fr",
            gap: 30,
            height: "100%",
            alignItems: "center",
          }}
        >
          {[
            ["For candidates", "Show what you can do", "Build evidence beyond the CV.", brand.colors.blue],
            ["For companies", "Find stronger talent faster", "Shortlist with real performance signals.", brand.colors.purple],
          ].map(([label, headline, body, color], index) => {
            const enter = interpolate(frame, [index * 12, index * 12 + fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <GlassCard
                key={label}
                style={{
                  padding: isVertical ? 48 : 42,
                  minHeight: isVertical ? 390 : 510,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  opacity: enter,
                  transform: `translateY(${(1 - enter) * 46}px)`,
                }}
              >
                <div>
                  <div
                    style={{
                      width: 78,
                      height: 78,
                      borderRadius: 8,
                      background: color,
                      boxShadow: `0 24px 58px ${color}44`,
                    }}
                  />
                  <div style={{marginTop: 38, fontSize: 26, fontWeight: 820, color}}>
                    {label}
                  </div>
                  <div style={{marginTop: 18, fontSize: isVertical ? 54 : 48, lineHeight: 1.05, fontWeight: 880, color: brand.colors.ink}}>
                    {headline}
                  </div>
                </div>
                <div style={{fontSize: 26, lineHeight: 1.35, color: brand.colors.inkSoft}}>
                  {body}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </SceneFrame>
    </>
  );
};
