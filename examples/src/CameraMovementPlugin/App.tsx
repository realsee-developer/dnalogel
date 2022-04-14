import { CameraMovementPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import CameraMovementPluginUse from "./CameraMovementPluginUse";
import useFetchDatas, { DATATYPES } from "../utils/useFetchDatas";

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [
    [CameraMovementPlugin, 'cameraMovementPlugin', {}]
  ]
});

const App: React.FC = () => {
  const size = useWindowDimensions();
  const work = useFetchDatas(DATATYPES.WORK)

  return work && <FiveProvider initialWork={work} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size}/>
    <CameraMovementPluginUse/>
  </FiveProvider>;
};

export default App ;

