import { PanoTagPlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import { Box } from '@mui/material'
import PanoTagPluginUse from './PanoTagPluginUse'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";


const FiveProvider = createFiveProvider({
    imageOptions: { size: 512 }, // 图片默认分辨率
    textureOptions: { size: 128 }, // 贴图默认分辨率
    onlyRenderIfNeeds: true,
    plugins: [
        [
            PanoTagPlugin,
            'panoTagPlugin',
        ],
    ],
})

const App: React.FC = () => {
    const size = useWindowDimensions()
    const work = useFetchDatas(DATA_TYPES.WORK)

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         const five = (window as any).$five
    //         five.setState({ mode: 'Panorama' })
    //     }, 5000)
    // }, [])
    return (
        work && (
            <FiveProvider
                initialWork={parseWork(work)}
                // initialState={{mode : 'Floorplan'}}
                ref={(ref) => Object.assign(window, { $five: ref?.five })}
            >
                <FiveCanvas {...size} />
                <PanoTagPluginUse />
            </FiveProvider>
        )
    )
}

export default App
