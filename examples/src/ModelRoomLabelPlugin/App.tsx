import { ModelRoomLabelPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import { parseWork } from "@realsee/five";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import ModelRoomLabelPluginShow from "./ModelRoomLabelPluginShow";
import { Box } from "@mui/material";
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const defaultPluginParam = {

}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam


const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [
    [
        ModelRoomLabelPlugin,
      'modelRoomLabelPlugin',
      { ...pluginParams }
    ]
  ]
});

const App: React.FC = () => {
  const size = useWindowDimensions();
  const work = useFetchDatas(DATA_TYPES.WORK)

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

