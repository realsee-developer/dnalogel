import { ModelViewPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { parseWork } from "@realsee/five";
import MiniModelPanel from "./MiniModelPanel";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      ModelViewPlugin,
      'modelViewPlugin'
    ]
  ]
});

const App: React.FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
    <FiveCanvas {...size} />
    <MiniModelPanel />
  </FiveProvider>;
};

export default App ;

