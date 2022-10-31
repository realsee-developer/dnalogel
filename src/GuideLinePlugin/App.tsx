import { GuideLinePlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import { Box } from '@mui/material'
import GuideLinePluginUse from './GuideLinePluginUse'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const FiveProvider = createFiveProvider({
    imageOptions: { size: 512 }, // 图片默认分辨率
    textureOptions: { size: 512 }, // 贴图默认分辨率
    onlyRenderIfNeeds: true,
    plugins: [
        [
            GuideLinePlugin,
            'guideLinePlugin',
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
                <GuideLinePluginUse />
            </FiveProvider>
        )
    )
}

export default App
