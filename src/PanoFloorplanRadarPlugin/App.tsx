import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { parseWork } from "@realsee/five";
import PanoFloorplanRadarPanel from "./PanoFloorplanRadarPanel";
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";
import useFetchDatas, { DATATYPES } from "../utils/useFetchDatas";

const defaultPluginParam = {

}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam


const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [
    [
      PanoFloorplanRadarPlugin,
      'panoFloorplanRadarPlugin',
      { ...pluginParams }
    ]
  ]
});

const App: React.FC = () => {
  const size = useWindowDimensions();
  const work = useFetchDatas(DATATYPES.WORK)

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size} />
    <PanoFloorplanRadarPanel />
  </FiveProvider>;
};

export default App ;

