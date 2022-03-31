import { PanoCompassPlugin } from "@realsee/dnalogel/libs/PanoCompassPlugin";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { Box } from "@mui/material";
import PanoCompassPluginUse from "./PanoCompassPluginUse";
import { parseWork } from "@realsee/five";

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  plugins: [
    [
        PanoCompassPlugin,
      'panoCompassPlugin',
      {
        // compassImageUrl: ''
      }
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size}/>
    <Box
        className="plugin-full-screen-container"
        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
    <PanoCompassPluginUse/>
  </FiveProvider>;
};

export default App ;

