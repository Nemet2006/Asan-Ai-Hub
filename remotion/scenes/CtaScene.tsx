import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {brand} from "../config";
import {BrandLockup, GlassCard, useSceneMotion} from "../components/Layout";
import type {SceneProps} from "./types";

export const CtaScene = ({aspect, scene}: SceneProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const {enter, exit, pop} = useSceneMotion(scene.duration);
  const isVertical = aspect === "vertical";
  const buttons = interpolate(frame, [1.4 * fps, 2.4 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "grid",
        placeItems: "center",
        padding: isVertical ? "86px 64px" : "86px 90px",
        background: "linear-gradient(135deg, #08111F, #172554 52%, #0E7490)",
        color: brand.colors.white,
        opacity: enter - exit,
      }}
    >
      <GlassCard
        dark
        style={{
          width: isVertical ? "88%" : "74%",
          minHeight: isVertical ? 860 : 610,
          padding: isVertical ? 62 : 68,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transform: `scale(${0.94 + pop * 0.06})`,
        }}
      >
        <BrandLockup dark large />
        <div
          style={{
            marginTop: 52,
            fontSize: isVertical ? 78 : 76,
            lineHeight: 1.02,
            fontWeight: 900,
            maxWidth: 1120,
          }}
        >
          Hire by skill, not by CV.
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: isVertical ? 34 : 32,
            lineHeight: 1.35,
            color: "#C7D2FE",
            maxWidth: 920,
          }}
        >
          Real tasks. Real reports. Better hiring.
        </div>
        <div
          style={{
            marginTop: 52,
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            gap: 18,
            opacity: buttons,
            transform: `translateY(${(1 - buttons) * 24}px)`,
          }}
        >
          {["Join the pilot", "Request a company demo"].map((label, index) => (
            <div
              key={label}
              style={{
                padding: "22px 30px",
                borderRadius: 8,
                background: index === 0 ? "linear-gradient(135deg, #2563EB, #06B6D4)" : "rgba(255,255,255,0.12)",
                border: index === 0 ? "none" : "1px solid rgba(255,255,255,0.22)",
                color: brand.colors.white,
                fontSize: 26,
                fontWeight: 850,
                minWidth: isVertical ? 520 : 300,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
