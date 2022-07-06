import { PanoSpatialTagPlugin } from "@realsee/dnalogel";
import { ModelViewPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
// @ts-ignore
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { parseWork } from "@realsee/five";
import MiniModelPanel from "./MiniModelPanel";
import PanoSpacialTagPluginUse from "./PanoSpatialTagPluginUse";
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const defaultPluginParam = {

}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam


const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoSpatialTagPlugin,
      'panoSpatialTagPlugin',
      { ...pluginParams },
    ],
    [
      ModelViewPlugin,
      'modelViewPlugin',
      { ...pluginParams },
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();
  const work = useFetchDatas(DATA_TYPES.WORK, '81gmMq5eXl5I9y7JMk')
  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size} />
    <PanoSpacialTagPluginUse />
    <MiniModelPanel />
  </FiveProvider>;
};

export default App ;

