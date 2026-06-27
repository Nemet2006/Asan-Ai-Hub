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
          "radial-gradient(circle at 12% 24%, rgba(124,58,237,0.62), transparent 24%), radial-gradient(circle at 82% 18%, rgba(6,182,212,0.36), transparent 24%), radial-gradient(circle at 62% 84%, rgba(37,99,235,0.36), transparent 28%), linear-gradient(135deg, #050711 0%, #0B1020 46%, #180719 100%)",
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.2,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: `translate(${drift * -0.18}px, ${drift * -0.1}px)`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.72) 100%)",
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
  const color = brand.colors.white;
  const textWidth = isVertical ? "86%" : "39%";

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
          <BrandLockup dark />
          <Kicker>{scene.kicker}</Kicker>
          <h1
            style={{
              margin: "22px 0 0",
              maxWidth: isVertical ? 840 : 700,
              fontSize: isVertical ? 70 : 62,
              lineHeight: 1.02,
              letterSpacing: 0,
              fontWeight: 820,
              textShadow: "0 24px 80px rgba(0,0,0,0.72)",
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
      color: "#DFFBFF",
      background: "rgba(6,182,212,0.14)",
      border: "1px solid rgba(103,232,249,0.34)",
      boxShadow: "0 0 42px rgba(6,182,212,0.18)",
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
      background: dark ? "rgba(15,23,42,0.76)" : "rgba(255,255,255,0.94)",
      boxShadow: dark
        ? "0 32px 110px rgba(0,0,0,0.42), 0 0 80px rgba(124,58,237,0.18)"
        : "0 38px 120px rgba(0,0,0,0.42), 0 0 90px rgba(124,58,237,0.22)",
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
      padding: 0,
      overflow: "hidden",
      transform:
        aspect === "vertical"
          ? "perspective(1800px) rotateX(4deg)"
          : "perspective(1800px) rotateX(7deg) rotateY(-8deg) rotateZ(1deg)",
      transformOrigin: "center center",
      ...style,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: aspect === "vertical" ? 74 : 66,
        padding: aspect === "vertical" ? "0 28px" : "0 30px",
        borderBottom: dark ? "1px solid rgba(255,255,255,0.13)" : "1px solid #E2E8F0",
        background: dark ? "rgba(15,23,42,0.82)" : "rgba(248,250,252,0.98)",
      }}
    >
      <div style={{display: "flex", gap: 10}}>
        {["#EF4444", "#F59E0B", "#22C55E"].map((color) => (
          <div key={color} style={{width: 14, height: 14, borderRadius: 14, background: color}} />
        ))}
      </div>
      <div
        style={{
          fontSize: aspect === "vertical" ? 26 : 24,
          fontWeight: 800,
          color: dark ? brand.colors.white : brand.colors.ink,
          background: dark ? "rgba(255,255,255,0.07)" : "#FFFFFF",
          border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid #E2E8F0",
          borderRadius: 8,
          padding: "10px 18px",
          minWidth: aspect === "vertical" ? 360 : 420,
          textAlign: "center",
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: 118,
          height: 34,
          borderRadius: 999,
          background: dark ? "rgba(255,255,255,0.08)" : "#E2E8F0",
        }}
      />
    </div>
    <div
      style={{
        padding: aspect === "vertical" ? 30 : 34,
        height: `calc(100% - ${aspect === "vertical" ? 74 : 66}px)`,
      }}
    >
      <div style={{height: "100%"}}>{children}</div>
    </div>
  </GlassCard>
);

export const CursorPointer: FC<{x: number; y: number; scale?: number}> = ({
  x,
  y,
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.92, 1.06]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 72 * scale,
        height: 72 * scale,
        transform: `scale(${pulse}) rotate(-12deg)`,
        filter: "drop-shadow(0 18px 26px rgba(0,0,0,0.32))",
        zIndex: 20,
      }}
    >
      <svg viewBox="0 0 80 80" width="100%" height="100%">
        <path
          d="M18 8L62 48L43 51L35 70L18 8Z"
          fill="#FFFFFF"
          stroke="#111827"
          strokeLinejoin="round"
          strokeWidth="5"
        />
        <path d="M42 50L54 68" stroke="#111827" strokeLinecap="round" strokeWidth="5" />
      </svg>
      <div
        style={{
          position: "absolute",
          left: 34 * scale,
          top: 34 * scale,
          width: 80 * scale,
          height: 80 * scale,
          borderRadius: 999,
          border: "2px solid rgba(103,232,249,0.7)",
          opacity: 0.5,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

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
