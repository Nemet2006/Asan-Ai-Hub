import type {CSSProperties, FC, ReactNode} from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {FPS, brand, scenes, totalDurationInFrames, type Aspect, type SceneConfig} from "../config";

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const enterProgress = (frame: number, fps: number, delay = 0) =>
  interpolate(frame, [delay, delay + 0.85 * fps], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const exitProgress = (frame: number, fps: number, duration: number) =>
  interpolate(frame, [duration - 0.75 * fps, duration], [0, 1], {
    easing: Easing.in(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const useSceneMotion = (durationSeconds: number, delay = 0) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = enterProgress(frame, fps, delay);
  const exit = exitProgress(frame, fps, durationSeconds * fps);
  const pop = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {damping: 18, stiffness: 120, mass: 0.8},
  });

  return {frame, fps, enter, exit, pop};
};

export const BackgroundGrid: FC = () => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, totalDurationInFrames], [0, 110], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 18% 20%, rgba(37,99,235,0.16), transparent 28%), radial-gradient(circle at 84% 22%, rgba(6,182,212,0.14), transparent 24%), linear-gradient(135deg, #F8FAFC 0%, #EEF5FF 48%, #FFFFFF 100%)",
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.34,
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: `translate(${drift * -0.18}px, ${drift * -0.1}px)`,
        }}
      />
    </AbsoluteFill>
  );
};

export const SceneFrame: FC<{
  aspect: Aspect;
  scene: SceneConfig;
  children: ReactNode;
  tone?: "light" | "dark";
}> = ({aspect, scene, children, tone = "light"}) => {
  const {enter, exit} = useSceneMotion(scene.duration);
  const isVertical = aspect === "vertical";
  const color = tone === "dark" ? brand.colors.white : brand.colors.ink;
  const textWidth = isVertical ? "86%" : "44%";

  return (
    <AbsoluteFill
      style={{
        padding: isVertical ? "86px 64px 108px" : "78px 90px",
        color,
        opacity: enter - exit,
        transform: `translateY(${(1 - enter) * 38 - exit * 22}px)`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isVertical ? "1fr" : `${textWidth} 1fr`,
          gridTemplateRows: isVertical ? "auto 1fr" : "1fr",
          gap: isVertical ? 44 : 62,
          height: "100%",
          alignItems: "center",
        }}
      >
        <div style={{alignSelf: isVertical ? "start" : "center"}}>
          <BrandLockup dark={tone === "dark"} />
          <Kicker>{scene.kicker}</Kicker>
          <h1
            style={{
              margin: "22px 0 0",
              maxWidth: isVertical ? 840 : 760,
              fontSize: isVertical ? 72 : 68,
              lineHeight: 1.02,
              letterSpacing: 0,
              fontWeight: 820,
            }}
          >
            {scene.title}
          </h1>
        </div>
        <div style={{height: "100%", minHeight: 0}}>{children}</div>
      </div>
    </AbsoluteFill>
  );
};

export const BrandLockup: FC<{dark?: boolean; large?: boolean}> = ({
  dark = false,
  large = false,
}) => {
  const markSize = large ? 82 : 44;

  return (
    <div style={{display: "flex", alignItems: "center", gap: large ? 22 : 14}}>
      <div
        style={{
          width: markSize,
          height: markSize,
          borderRadius: large ? 24 : 14,
          background: "linear-gradient(135deg, #2563EB, #7C3AED 55%, #06B6D4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 18px 48px rgba(37,99,235,0.28)",
          overflow: "hidden",
        }}
      >
        {brand.logoPath ? (
          <Img
            src={staticFile(brand.logoPath)}
            style={{width: "100%", height: "100%", objectFit: "cover"}}
          />
        ) : (
          <span style={{color: "#fff", fontSize: large ? 34 : 20, fontWeight: 900}}>JS</span>
        )}
      </div>
      <div
        style={{
          fontSize: large ? 56 : 30,
          fontWeight: 850,
          letterSpacing: 0,
          color: dark ? brand.colors.white : brand.colors.ink,
        }}
      >
        {brand.name}
      </div>
    </div>
  );
};

export const Kicker: FC<{children: ReactNode}> = ({children}) => (
  <div
    style={{
      display: "inline-flex",
      marginTop: 44,
      padding: "13px 18px",
      borderRadius: 999,
      color: brand.colors.blue,
      background: "rgba(37,99,235,0.1)",
      border: "1px solid rgba(37,99,235,0.18)",
      fontSize: 26,
      lineHeight: 1,
      fontWeight: 760,
    }}
  >
    {children}
  </div>
);

export const GlassCard: FC<{
  children: ReactNode;
  style?: CSSProperties;
  dark?: boolean;
}> = ({children, style, dark = false}) => (
  <div
    style={{
      borderRadius: 8,
      border: dark ? "1px solid rgba(255,255,255,0.16)" : `1px solid ${brand.colors.line}`,
      background: dark ? "rgba(15,23,42,0.76)" : "rgba(255,255,255,0.82)",
      boxShadow: dark ? "0 28px 80px rgba(0,0,0,0.28)" : "0 28px 80px rgba(15,23,42,0.12)",
      backdropFilter: "blur(22px)",
      ...style,
    }}
  >
    {children}
  </div>
);

export const Pill: FC<{
  children: ReactNode;
  tone?: "blue" | "purple" | "cyan" | "green" | "amber" | "rose";
}> = ({children, tone = "blue"}) => {
  const color = brand.colors[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 14px",
        borderRadius: 999,
        background: `${color}18`,
        color,
        fontSize: 22,
        fontWeight: 760,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
};

export const DashboardFrame: FC<{
  children: ReactNode;
  title: string;
  aspect: Aspect;
  dark?: boolean;
  style?: CSSProperties;
}> = ({children, title, aspect, dark = false, style}) => (
  <GlassCard
    dark={dark}
    style={{
      height: aspect === "vertical" ? "100%" : "78%",
      padding: aspect === "vertical" ? 30 : 34,
      overflow: "hidden",
      ...style,
    }}
  >
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
      <div
        style={{
          fontSize: aspect === "vertical" ? 26 : 24,
          fontWeight: 800,
          color: dark ? brand.colors.white : brand.colors.ink,
        }}
      >
        {title}
      </div>
      <div style={{display: "flex", gap: 10}}>
        {["#E11D48", "#F59E0B", "#16A34A"].map((color) => (
          <div key={color} style={{width: 14, height: 14, borderRadius: 14, background: color}} />
        ))}
      </div>
    </div>
    <div style={{marginTop: 28, height: "calc(100% - 60px)"}}>{children}</div>
  </GlassCard>
);

export const SceneProgress: FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  const isVertical = height > width;
  const elapsed = Math.min(1, frame / totalDurationInFrames);
  const sceneStops = scenes.reduce<number[]>((marks, scene) => {
    const last = marks.length === 0 ? 0 : marks[marks.length - 1];
    return [...marks, last + (scene.duration * FPS) / totalDurationInFrames];
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: isVertical ? 64 : 90,
        right: isVertical ? 64 : 90,
        bottom: isVertical ? 58 : 44,
        height: 6,
        borderRadius: 999,
        background: "rgba(15,23,42,0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${elapsed * 100}%`,
          height: "100%",
          borderRadius: 999,
          background: "linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4)",
        }}
      />
      {sceneStops.slice(0, -1).map((stop) => (
        <div
          key={stop}
          style={{
            position: "absolute",
            left: `${stop * 100}%`,
            top: 0,
            width: 2,
            height: "100%",
            background: "rgba(255,255,255,0.72)",
          }}
        />
      ))}
    </div>
  );
};
