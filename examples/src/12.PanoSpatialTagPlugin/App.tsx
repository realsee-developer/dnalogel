import { PanoSpatialTagPlugin } from "@realsee/dnalogel";
import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { parseWork } from "@realsee/five";
import PanoFloorplanRadarPanel from "./PanoFloorplanRadarPanel";
import PanoSpacialTagPluginUse from "./PanoSpatialTagPluginUse";
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";

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

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size} />
    <PanoSpacialTagPluginUse />
    <PanoFloorplanRadarPanel />
  </FiveProvider>;
};

export default App ;

