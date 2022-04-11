import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { modelEntryDoorGuidePluginServerData, work } from '../mockData'
import { parseWork } from "@realsee/five";
import ModelEntryDoorGuidePluginUse from "./ModelEntryDoorGuidePluginUse";
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";

const defaultPluginParam = {
  // animationEnabled: true
}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam


const FiveProvider = createFiveProvider({
  plugins: [
    [
      ModelEntryDoorGuidePlugin,
      'modelEntryDoorGuidePlugin',
      {
        fbx_url: '//vrlab-image4.ljcdn.com/release/web/entryDoorMini/Anim_Door1.fbx',
        position: modelEntryDoorGuidePluginServerData?.position,
        rad: modelEntryDoorGuidePluginServerData?.rad,
        ...pluginParams
      }
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size} />
    <ModelEntryDoorGuidePluginUse />
  </FiveProvider>;
};

export default App ;

