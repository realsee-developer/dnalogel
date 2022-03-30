import { PanoSpatialTagPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { parseWork } from "@realsee/five";
import PanoSpacialTagPluginUse from "./PanoSpatialTagPluginUse";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoSpatialTagPlugin,
      'panoSpatialTagPlugin'
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size} />
    <PanoSpacialTagPluginUse/>
  </FiveProvider>;
};

export default App ;

