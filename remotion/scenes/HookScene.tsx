import {Easing, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {brand} from "../config";
import {CursorPointer, GlassCard, SceneFrame, useSceneMotion} from "../components/Layout";
import type {SceneProps} from "./types";

const candidates = [
  {name: "Aylin R.", role: "Data Analyst", tag: "Not enough proof", score: 38},
  {name: "Murat K.", role: "Frontend", tag: "CV keywords", score: 42},
  {name: "Sara M.", role: "Marketing", tag: "Portfolio missing", score: 35},
  {name: "Niko B.", role: "Operations", tag: "Real task passed", score: 91},
  {name: "Leyla S.", role: "HR", tag: "Entry level", score: 44},
];

export const HookScene = ({aspect, scene}: SceneProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const {pop} = useSceneMotion(scene.duration);
  const isVertical = aspect === "vertical";

  return (
    <SceneFrame aspect={aspect} scene={scene}>
      <div
        style={{
          position: "relative",
          height: "100%",
          minHeight: isVertical ? 980 : 620,
        }}
      >
        {candidates.map((candidate, index) => {
          const highlighted = index === 3;
          const enter = interpolate(frame, [index * 5, index * 5 + 28], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const float = Math.sin((frame + index * 18) / 24) * 12;
          const positions = isVertical
            ? [
                [5, 80],
                [42, 210],
                [1, 390],
                [26, 540],
                [11, 740],
              ]
            : [
                [4, 86],
                [44, 20],
                [11, 366],
                [38, 246],
                [4, 566],
              ];

          return (
            <GlassCard
              key={candidate.name}
              style={{
                position: "absolute",
                left: `${positions[index][0]}%`,
                top: positions[index][1],
                width: isVertical ? 520 : 440,
                padding: 28,
                opacity: enter,
                filter: highlighted ? "none" : "blur(0.7px) grayscale(0.2)",
                transform: `translateY(${(1 - enter) * 70 + float}px) scale(${
                  highlighted ? 0.94 + pop * 0.08 : 0.96
                })`,
                border: highlighted
                  ? "2px solid rgba(37,99,235,0.65)"
                  : `1px solid ${brand.colors.line}`,
              }}
            >
              <div style={{display: "flex", justifyContent: "space-between", gap: 18}}>
                <div>
                  <div style={{fontSize: 28, fontWeight: 850, color: brand.colors.ink}}>
                    {candidate.name}
                  </div>
                  <div style={{marginTop: 8, fontSize: 20, color: brand.colors.inkSoft}}>
                    {candidate.role}
                  </div>
                </div>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 8,
                    background: highlighted
                      ? "linear-gradient(135deg, #2563EB, #06B6D4)"
                      : "rgba(148,163,184,0.18)",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: 24,
                  height: 9,
                  borderRadius: 999,
                  background: "rgba(148,163,184,0.25)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${candidate.score}%`,
                    height: "100%",
                    borderRadius: 999,
                    background: highlighted
                      ? "linear-gradient(90deg, #2563EB, #06B6D4)"
                      : "rgba(100,116,139,0.42)",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: 20,
                  display: "inline-flex",
                  padding: "9px 12px",
                  borderRadius: 999,
                  background: highlighted ? "rgba(22,163,74,0.12)" : "rgba(225,29,72,0.08)",
                  color: highlighted ? brand.colors.green : brand.colors.rose,
                  fontSize: 18,
                  fontWeight: 780,
                }}
              >
                {candidate.tag}
              </div>
            </GlassCard>
          );
        })}
        <CursorPointer x={isVertical ? 560 : 780} y={isVertical ? 640 : 430} scale={isVertical ? 1.15 : 1} />
      </div>
    </SceneFrame>
  );
};
