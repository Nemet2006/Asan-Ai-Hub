import {Composition, Folder} from "remotion";
import {FPS, totalDurationInFrames} from "./config";
import {JobSimPromo} from "./JobSimPromo";

export const RemotionRoot = () => {
  return (
    <Folder name="JobSimAI">
      <Composition
        id="JobSimAI-Landscape"
        component={JobSimPromo}
        durationInFrames={totalDurationInFrames}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{aspect: "landscape" as const}}
      />
      <Composition
        id="JobSimAI-Vertical"
        component={JobSimPromo}
        durationInFrames={totalDurationInFrames}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{aspect: "vertical" as const}}
      />
    </Folder>
  );
};
