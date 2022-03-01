import { PanoCursorRaycasterPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { Box } from "@mui/material";
import CameraMovementPluginUse from "./CameraMovementPluginUse";

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  plugins: [
    [PanoCursorRaycasterPlugin, 'panoCursorRaycasterPlugin']
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={work} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size}/>
    <CameraMovementPluginUse/>
  </FiveProvider>;
};

export default App ;

