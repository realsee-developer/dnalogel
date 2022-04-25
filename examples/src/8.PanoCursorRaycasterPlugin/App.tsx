import { PanoCursorRaycasterPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";


import { work } from '../mockData'
import { Box } from "@mui/material";
import PanoCursorRaycasterPluginUse from "./PanoCursorRaycasterPluginUse";
import { parseWork } from "@realsee/five";

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  plugins: [
    [PanoCursorRaycasterPlugin, 'panoCursorRaycasterPlugin']
  ]
});

const App: React.FC = () => {
  const size = useWindowDimensions();

  const PluginFullScreenContainer = React.memo(
      () => <Box
          className="plugin-full-screen-container"
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />,
      () => true
  )

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size}/>
    <PluginFullScreenContainer/>
    <PanoCursorRaycasterPluginUse/>
  </FiveProvider>;
};

export default App ;

