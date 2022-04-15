import PanoMeasurePlugin from "@realsee/dnalogel/libs/PanoMeasurePlugin";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import * as React from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import PanoMeasurePluginUsage from "./PanoMeasurePluginUsage";
import { parseWork } from "@realsee/five";
import { Box } from "@mui/material";

const FiveProvider = createFiveProvider({
    onlyRenderIfNeeds: true,
    plugins: [
        [
            PanoMeasurePlugin,
            'panoMeasurePlugin',
            { useUIController: true }]
    ]
});

const App: React.FC = () => {
    const size = useWindowDimensions();

    return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref?.five })}>
		<FiveCanvas {...size} />
	    <Box
		    className="plugin-full-screen-container"
		    sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
	    />
        <PanoMeasurePluginUsage/>
	</FiveProvider>;
};

export default App;
