import { Object3DHelperPlugin, PanoTagPlugin } from "@realsee/dnalogel";
import { ModelViewPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
// @ts-ignore
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { parseWork } from "@realsee/five";
import PanoSpacialTagPluginUse from "./PluginUse";
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoTagPlugin,
      'panoTagPlugin',
      {  },
    ],
    [
      Object3DHelperPlugin,
      'object3DHelperPlugin',
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();
  const work = useFetchDatas(DATA_TYPES.WORK, 'pWLy9ndnVL73Xqja', 'real')
  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size} />
    <PanoSpacialTagPluginUse />
  </FiveProvider>;
};

export default App ;

