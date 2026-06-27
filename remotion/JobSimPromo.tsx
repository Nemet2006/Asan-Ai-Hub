import type {FC} from "react";
import {AbsoluteFill, Sequence, useVideoConfig} from "remotion";
import {Aspect, FPS, scenes} from "./config";
import {AnalysisScene} from "./scenes/AnalysisScene";
import {CandidateScene} from "./scenes/CandidateScene";
import {CompanyScene} from "./scenes/CompanyScene";
import {CtaScene} from "./scenes/CtaScene";
import {HookScene} from "./scenes/HookScene";
import {ProblemScene} from "./scenes/ProblemScene";
import {SolutionScene} from "./scenes/SolutionScene";
import {ValueScene} from "./scenes/ValueScene";
import {BackgroundGrid, SceneProgress} from "./components/Layout";

export type JobSimPromoProps = {
  aspect: Aspect;
};

const sceneComponents = [
  HookScene,
  ProblemScene,
  SolutionScene,
  CandidateScene,
  AnalysisScene,
  CompanyScene,
  ValueScene,
  CtaScene,
];

export const JobSimPromo: FC<JobSimPromoProps> = ({aspect}) => {
  const {fps} = useVideoConfig();
  let from = 0;

  return (
    <AbsoluteFill style={{backgroundColor: "#F8FAFC"}}>
      <BackgroundGrid />
      {scenes.map((scene, index) => {
        const Scene = sceneComponents[index];
        const durationInFrames = scene.duration * FPS;
        const currentFrom = from;
        from += durationInFrames;

        return (
          <Sequence
            key={scene.id}
            from={currentFrom}
            durationInFrames={durationInFrames}
            premountFor={fps}
          >
            <Scene aspect={aspect} scene={scene} />
          </Sequence>
        );
      })}
      <SceneProgress />
    </AbsoluteFill>
  );
};
