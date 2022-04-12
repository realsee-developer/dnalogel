import * as React from "react";
import ReactDOM from "react-dom";
import {
    unsafe__useFiveInstance,
    useFiveModelReadyState
} from "@realsee/five/react";
import { Box } from '@mui/material'

const TEST_IMG_URL = "//vrlab-image4.ljcdn.com/release/web/v3/demo/mrInfo.png" // 需要贴的图
const TEST_POINTS = [ // 需要贴图的坐标，位置从左下->右下->右上->左上逆时针方向
    { x: -3.3344076411262944, y: 0.7070410926642972, z: -2.3397009372711186 },
    { x: -1.947745466006547, y: 0.7678691748510869, z: -2.3397009372711177 },
    { x: -2.0238408338740634, y: 1.8272970618148188, z: -2.3397009372711186 },
    { x: -3.3544256660994267, y: 2.0150695242803196, z: -2.3397009372711177 }
]

// 需要被实时渲染的 dom
const StickerWrapComponent = () => {
    return (
        <Box sx={{ width: '100%', height: '100%', pointerEvents: 'none', userSelect: 'none', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            <img
                style={{ position: 'relative', left: '50%', top: '50%', width: '70%', transform: 'translate(-50%, -50%)', pointerEvents: 'auto' }}
                src={TEST_IMG_URL}
                alt="小区信息"
            />
        </Box>
    )
}


const CSS3DRenderPluginUse: React.FC = () => {
    const five = unsafe__useFiveInstance()
    const fiveModelReadyState = useFiveModelReadyState()

    React.useEffect(() => {
        if (fiveModelReadyState !== 'Loaded') {
            console.warn('five model is not ready!')
            return
        }

        const disposers: any[] =[]

        // 将 dom 放到 five canvas 之后
        // wrapper 准备
        const wrapperDom = document.getElementById('app') || five.getElement()?.parentElement!

        // content 准备
        let behindFiveContainer: HTMLElement | undefined
        behindFiveContainer = wrapperDom.getElementsByClassName('behind-five-canvas')?.[0] as HTMLElement | undefined
        // 不存在则创建
        if (!behindFiveContainer) {
            behindFiveContainer = document.createElement('div')
            behindFiveContainer.style.position = 'absolute'
            behindFiveContainer.style.left = '0'
            behindFiveContainer.style.top = '0'
            behindFiveContainer.style.backgroundColor = 'rgb(25, 20, 20)'
            wrapperDom.insertBefore(behindFiveContainer, wrapperDom.firstChild)
        }

        // 3D render dom 准备
        const { container, dispose, css3DObject, render } = five.plugins.css3DRenderPlugin.create3DDomContainer(TEST_POINTS, {mode: 'behind', behindFiveContainer} )

        if(container) {
            return ReactDOM.render(<StickerWrapComponent />, container)
        }

        disposers.push(dispose)

        return () => {
            disposers.forEach((dispose) => dispose?.())
        }

    }, [five.camera, fiveModelReadyState])

    return null
}

export default CSS3DRenderPluginUse
