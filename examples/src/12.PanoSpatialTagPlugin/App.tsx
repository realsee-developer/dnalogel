import { PanoSpatialTagPlugin } from "@realsee/dnalogel";
import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { parseWork } from "@realsee/five";
import PanoFloorplanRadarPanel from "./PanoFloorplanRadarPanel";
import PanoSpacialTagPluginUse from "./PanoSpatialTagPluginUse";
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";
import useFetchDatas, { DATATYPES } from "../utils/useFetchDatas";

const defaultPluginParam = {

}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam


const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoSpatialTagPlugin,
      'panoSpatialTagPlugin'
    ],
    [
      PanoFloorplanRadarPlugin,
      'panoFloorplanRadarPlugin',
      { ...pluginParams }
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();
  const work = useFetchDatas(DATATYPES.WORK)

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size} />
    <PanoSpacialTagPluginUse />
    <PanoFloorplanRadarPanel />
  </FiveProvider>;
};

export default App ;

