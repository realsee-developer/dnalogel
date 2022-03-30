import { PanoRulerPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from './mockData'
import PanoRulerPluginUsage from "./PanoRulerPluginUsage";

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  plugins: [
    [PanoRulerPlugin, 'panoRulerPlugin', {}]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={work} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size}/>
    <PanoRulerPluginUsage/>
  </FiveProvider>;
};

export default App ;