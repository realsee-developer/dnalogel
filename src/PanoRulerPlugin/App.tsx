import { PanoRulerPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import PanoRulerPluginUsage from "./PanoRulerPluginUsage";
import { parseWork } from "@realsee/five";

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  plugins: [
    [PanoRulerPlugin, 'panoRulerPlugin', {}]
  ]
});

const App: React.FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size}/>
    <PanoRulerPluginUsage/>
  </FiveProvider>;
};

export default App ;
