import { PanoRulerPlugin } from '@realsee/dnalogel'
import { unsafe__useFiveInstance, useFiveEventCallback } from '@realsee/five/react'
import * as React from 'react'
import { roomInfo, roomRules } from './mockData'


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PanoRulerPluginUsePropTypes {}



const PanoRulerPluginUsage=(props: PanoRulerPluginUsePropTypes)=> {
  const five = unsafe__useFiveInstance()
  const panoRulerPlugin = five.plugins.panoRulerPlugin as ReturnType<typeof PanoRulerPlugin>
  // 标尺状态
  const [state, setState] = React.useState(panoRulerPlugin.state.enable)
  useFiveEventCallback('modelLoaded', async () => {
    await panoRulerPlugin.load(roomInfo, roomRules)
    setState(panoRulerPlugin.state.enable)
  })

  return (
    <button
        style={{ position: 'absolute', right: '36px', top: '24px',background: '#0078e7', color: '#fff', padding:'7px 14px', border:'none', borderRadius:'2px'  }}
        onClick={() => {
          console.log('-->', panoRulerPlugin)
          panoRulerPlugin[panoRulerPlugin.state.enable ? 'disable' : 'enable']()
          setState(panoRulerPlugin.state.enable)
        }}
      >
        {state ? '关闭标尺' : '开启标尺'}
      </button>
  )
}

export default PanoRulerPluginUsage;