import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import { unsafe__useFiveInstance, useFiveModelReadyState } from '@realsee/five/react'
import { Input } from '@mui/material'
import { iframePoints, ImageExamplePoints, VideoExamplePoints } from './points'
import { useFivePlugin } from '../utils/hooks/useFivePlugin'
import { CSS3DRenderPlugin } from '@realsee/dnalogel'

// function ReactExample() {
//   const [count, setCount] = React.useState(0)

//   return (
//     <div className="CSS3DRenderPluginUse__ReactExamples">
//       <h2>React Components</h2>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }

const CSS3DRenderPluginUse: React.FC = () => {
  const five = unsafe__useFiveInstance()
  const fiveModelReadyState = useFiveModelReadyState()
  const css3DRenderPlugin = useFivePlugin<typeof CSS3DRenderPlugin>('css3DRenderPlugin')
  const [visible, setVisible] = React.useState(css3DRenderPlugin.state.visible)
  const [catCodingVisible, setCatCodingVisible] = React.useState(true)
  const [enable, setEnable] = React.useState(css3DRenderPlugin.state.enabled)

  React.useEffect(() => {
    five.plugins.panoTagPlugin.load({
        tagList: [
          {
            dimensionType: '2D',
            pointType: 'PointTag',
            contentType: 'Text',
            position: [-3.3344076411262944, 0.7070410926642972, -2.3397009372711186],
            data: {
              text: '112123',
            },
          },
        ],
      })
    const { container, dispose, setVisible } =
      css3DRenderPlugin.create3DDomContainer(ImageExamplePoints, {
        pointerEvents: 'auto',
        // ratio: 0.005,
      }) || {}
    container && ReactDOM.render(<img src="//vrlab-static.ljcdn.com/release/web/catCoding.1cd4e989.gif" width="100%" />, container)
    Object.assign(window, { setCatCodingVisible: setVisible })
    return dispose
  }, [])

  React.useEffect(() => {
    const { container, dispose } =
      css3DRenderPlugin.create3DDomContainer(iframePoints, {
        pointerEvents: 'auto',
        ratio: 0.002,
      }) || {}
    container && ReactDOM.render(<iframe width="100%" height="100%" src="//home.realsee.com/" />, container)
    return dispose
  }, [])

  React.useEffect(() => {
    const disposers: any[] = []

    // 将 dom 放到 five canvas 之后
    // wrapper 准备
    const fiveElement = five.getElement()
    if (!fiveElement) return
    const wrapperDom = fiveElement.parentElement
    if (!wrapperDom) return
    // content 准备
    let behindFiveContainer: HTMLElement | undefined
    behindFiveContainer = wrapperDom.getElementsByClassName('behind-five')?.[0] as HTMLElement | undefined
    // 不存在则创建
    if (!behindFiveContainer) {
      behindFiveContainer = document.createElement('div')
      behindFiveContainer.classList.add('behind-five')
      behindFiveContainer.style.position = 'absolute'
      behindFiveContainer.style.left = '0'
      behindFiveContainer.style.top = '0'
      behindFiveContainer.style.right = '0'
      behindFiveContainer.style.bottom = '0'
      behindFiveContainer.style.zIndex = '-1'
      wrapperDom.insertBefore(behindFiveContainer, fiveElement)
    }

    // 3D render dom 准备
    const { container, dispose } =
      css3DRenderPlugin.create3DDomContainer(VideoExamplePoints, {
        pointerEvents: 'auto',
        mode: 'behind',
        behindFiveContainer,
      }) || {}
    container &&
      ReactDOM.render(
        <video src="//vrlab-public.ljcdn.com/release/web/videos/tv_ads/360/009.mp4" width="100%" height="100%" autoPlay loop muted />,
        container,
      )
    disposers.push(dispose)
    return () => disposers.forEach((dispose) => dispose?.())
  }, [])
  return (
    <>
      <HooksLog />
      <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <div>
          <span>css3DRenderPlugin visible: {visible ? 'show' : 'hide'}</span>
          <button
            onClick={() => {
              visible ? css3DRenderPlugin.hide() : css3DRenderPlugin.show()
              setVisible(css3DRenderPlugin.state.visible)
            }}
          >
            toggle
          </button>
        </div>
        <div>
          <span>css3DRenderPlugin enable: {enable ? 'enable' : 'disable'}</span>
          <button
            onClick={() => {
              enable ? css3DRenderPlugin.disable() : css3DRenderPlugin.enable()
              setEnable(css3DRenderPlugin.state.enabled)
            }}
          >
            toggle
          </button>
        </div>
        <div>
          <span>catCodingVisible visible: {catCodingVisible ? 'show' : 'hide'}</span>
          <button
            onClick={async () => {
              ;(window as any).setCatCodingVisible(!catCodingVisible)
              setCatCodingVisible(!catCodingVisible)
            }}
          >
            toggle
          </button>
        </div>
        <div>
          <button
            onClick={() => css3DRenderPlugin.dispose()}
          >
            dispose
          </button>
        </div>
      </div>
    </>
  )
}

function HooksLog() {
  const [hookList, setHookList] = React.useState<{ hookName: string; hookParams: string }[]>([])
  const css3DRenderPlugin = useFivePlugin<typeof CSS3DRenderPlugin>('css3DRenderPlugin')
  React.useEffect(() => {
    const events = ['stateChange', 'dispose', 'show', 'hide', 'enable', 'disable']
    const _hookList: { hookName: string; hookParams: string }[] = []
    events.forEach((event) => {
      css3DRenderPlugin.hooks.on(event as any, (...args: any[]) => {
        _hookList.push({ hookName: event, hookParams: JSON.stringify(args) })
        setHookList(_hookList)
      })
    })
  }, [])
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.1)' }}>
      hooks监听
      {hookList.map((hook, index) => (
        <div key={index}>
          <span>{hook.hookName}</span>:<span>{hook.hookParams}</span>
        </div>
      ))}
    </div>
  )
}

export default CSS3DRenderPluginUse
