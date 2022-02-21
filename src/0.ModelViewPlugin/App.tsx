import { ModelViewPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { parseWork } from "@realsee/five";
import MiniModelPanel from "./MiniModelPanel";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      ModelViewPlugin,
      'modelView'
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)}>
    <FiveCanvas {...size} />
    <MiniModelPanel />
  </FiveProvider>;
};

export default App ;

