import { CameraMovementPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import CameraMovementPluginUse from "./CameraMovementPluginUse";

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  plugins: [
    [CameraMovementPlugin, 'cameraMovementPlugin', {}]
  ]
});

const App: React.FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={work} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size}/>
    <CameraMovementPluginUse/>
  </FiveProvider>;
};

export default App ;

