import { CSS3DRenderPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { parseWork } from "@realsee/five";
import CSS3DRenderPluginUse from "./CSS3DRenderPluginUse";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      CSS3DRenderPlugin,
      'css3DRenderPlugin'
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size} />
    <CSS3DRenderPluginUse/>
  </FiveProvider>;
};

export default App ;

