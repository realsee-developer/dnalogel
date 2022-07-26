import { PanoRulerProPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import PanoRulerProPluginUsage from "./PanoRulerProPluginUsage";
import { parseWork } from "@realsee/five";
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const FiveProvider = createFiveProvider({
    imageOptions: { size: 512 }, // 图片默认分辨率
    textureOptions: { size: 512 }, // 贴图默认分辨率
    onlyRenderIfNeeds: true,
    plugins: [
        [
            PanoRulerProPlugin,
            'panoRulerProPlugin',
            {
                options: {
                    distanceText: (distance: number) => `约 ${distance.toFixed(1)}米`,
                },
            },
        ],
    ],
})

const App: React.FC = () => {
    const size = useWindowDimensions();
    const work = useFetchDatas(DATA_TYPES.WORK, '80o024DE2xyva3j5BE','real')


    return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
		<FiveCanvas {...size} />
		<PanoRulerProPluginUsage />
	</FiveProvider>;
};

export default App;
