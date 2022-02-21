import { TopviewFloorplanPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import { parseWork } from "@realsee/five";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import TopviewFloorplanPluginUse from "./TopviewFloorplanPluginUse";
import { Box } from '@mui/material'
import { work } from '../mockData'

const FiveProvider = createFiveProvider({
    plugins: [
        [
            TopviewFloorplanPlugin,
            'topviewFloorplanPlugin',
            {
                selector: '.plugin-full-screen-container',
                hoverEnable: true
            }
        ]
    ]
});

const App: FC = () => {
    const size = useWindowDimensions();

    const PluginFullScreenContainer = React.memo(
        () => <Box
            className="plugin-full-screen-container"
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
            }}
        />,
        () => true
    )

    return work && <FiveProvider initialWork={parseWork(work)}>
		<FiveCanvas {...size} />
		<PluginFullScreenContainer />
		<TopviewFloorplanPluginUse />
	</FiveProvider>;
};

export default App;
