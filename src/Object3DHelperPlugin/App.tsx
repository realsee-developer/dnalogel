import { Object3DHelperPlugin, PanoTagPlugin } from "@realsee/dnalogel/dist";
import { ModelViewPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
// @ts-ignore
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { parseWork } from "@realsee/five";
import PanoSpacialTagPluginUse from "./PluginUse";
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const FiveProvider = createFiveProvider({
  backgroundColor: 0x000000,
  backgroundAlpha: 0,
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 128 }, // 贴图默认分辨率
  plugins: [
    [
      PanoTagPlugin,
      'panoTagPlugin',
      { debug:true },
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
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <FiveCanvas {...size} />
    </div>
    <PanoSpacialTagPluginUse />
  </FiveProvider>;
};

export default App ;

