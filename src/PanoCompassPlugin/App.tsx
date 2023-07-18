import { PanoCompassPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import { Box } from '@mui/material'
import PanoCompassPluginUse from './PanoCompassPluginUse'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const FiveProvider = createFiveProvider({
    imageOptions: { size: 512 }, // 图片默认分辨率
    textureOptions: { size: 512 }, // 贴图默认分辨率
    onlyRenderIfNeeds: true,
    plugins: [
        [
            PanoCompassPlugin,
            'panoCompassPlugin',
            {
                // staticPrefix: 'a'
                // compassImageUrl: ''
            },
        ],
    ],
})

const App: React.FC = () => {
    const size = useWindowDimensions()
    const work = useFetchDatas(DATA_TYPES.WORK)

    return (
        work && (
            <FiveProvider
                initialWork={parseWork(work)}
                ref={(ref) => Object.assign(window, { $five: ref?.five })}
            >
                <FiveCanvas {...size} />
                <Box
                    className="plugin-full-screen-container"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                    }}
                />
                <PanoCompassPluginUse />
            </FiveProvider>
        )
    )
}

export default App
