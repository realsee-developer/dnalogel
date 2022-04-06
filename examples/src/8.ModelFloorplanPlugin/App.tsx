import { ModelFloorplanPlugin, FLOOR_PLAN_ATTACHED_TO } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import { parseWork } from "@realsee/five";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import ModelFloorplanPluginUse from "./ModelFloorplanPluginUse";
import { Box } from '@mui/material'
import { work } from '../mockData'
import getInitialParamFromUrl from "../utils/getInitialParamFromUrl";

const defaultPluginParam = {
}

const initialParamFromUrl = getInitialParamFromUrl()

console.log(initialParamFromUrl)

const pluginParams = (JSON.stringify(initialParamFromUrl) !== '{}') ? initialParamFromUrl : defaultPluginParam

const FiveProvider = createFiveProvider({
    plugins: [
        [
            ModelFloorplanPlugin,
            'modelFloorplanPlugin',
            {
                attachedTo: FLOOR_PLAN_ATTACHED_TO.CEILING,
                selector: '.plugin-full-screen-container',
                ...pluginParams
            }

        ]
    ]
});

const App: FC = () => {
    const size = useWindowDimensions();

    return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
		<FiveCanvas {...size} />
	    <Box
		    className="plugin-full-screen-container"
		    sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
	    />
		<ModelFloorplanPluginUse />
	</FiveProvider>;
};

export default App;
