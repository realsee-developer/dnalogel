import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { parseWork } from "@realsee/five";
import PanoFloorplanRadarPanel from "./PanoFloorplanRadarPanel";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoFloorplanRadarPlugin,
      'panoFloorplanRadarPlugin',
        {
          hoverEnable: true
        }
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)}>
    <FiveCanvas {...size} />
    <PanoFloorplanRadarPanel />
  </FiveProvider>;
};

export default App ;

