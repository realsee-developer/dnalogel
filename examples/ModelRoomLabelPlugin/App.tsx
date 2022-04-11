import { ModelRoomLabelPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import { parseWork } from "@realsee/five";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import ModelRoomLabelPluginShow from "./ModelRoomLabelPluginShow";
import { work } from '../mockData'
import { Box } from "@mui/material";
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";

const defaultPluginParam = {

}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam


const FiveProvider = createFiveProvider({
  plugins: [
    [
        ModelRoomLabelPlugin,
      'modelRoomLabelPlugin',
      { ...pluginParams }
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size}/>
    <Box
        className="plugin-full-screen-container"
        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
    <ModelRoomLabelPluginShow />
  </FiveProvider>;
};

export default App ;

