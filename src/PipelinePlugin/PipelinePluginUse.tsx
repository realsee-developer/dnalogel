/* eslint-disable react/jsx-curly-brace-presence */
import type { PipelinePlugin } from '@realsee/dnalogel/dist'
import * as React from 'react'
import { unsafe__useFiveInstance, useFiveModelReadyState } from '@realsee/five/react'
import Button from '@mui/material/Button'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import './index.css'

const TopviewFloorplanPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const plugin = five.plugins.pipelinePlugin as ReturnType<typeof PipelinePlugin>
  const [pipelineIndex, setPipelineIndex] = React.useState<number | undefined>()
  const pluginServerDada = useFetchDatas(DATA_TYPES.PIPELINE_DATA, '81xManr9NXhxbrmRmP') as any
  const fiveModelReadyState = useFiveModelReadyState()
  const pipelines = pluginServerDada ? pluginServerDada.ConnectsDataset.map(({ start, end }) => [start, end]) : []

  React.useEffect(() => {
    if (fiveModelReadyState === 'Loaded' && pluginServerDada) {
      plugin.load(pluginServerDada)
    }
  }, [pluginServerDada, fiveModelReadyState])

  React.useEffect(() => {
    if (typeof pipelineIndex === 'number') {
      const [startLibraryID, endLibraryID] = pipelines[pipelineIndex]
      const target = [{ startLibraryID, endLibraryID }]
      // plugin.switchPipelines({ target: [{ startLibraryID, endLibraryID }] })
      plugin.setState({ target })
    } else {
      const target = null
      // plugin.switchPipelines()
      plugin.setState({ target })
    }
  }, [pipelineIndex])

  React.useEffect(() => {
    plugin.hooks.on('show', (...arg) => console.info('show', ...arg))
    plugin.hooks.on('hide', (...arg) => console.info('hide', ...arg))
    plugin.hooks.on('dataChange', (...arg) => console.info('dataChange', ...arg))
    plugin.hooks.on('dataLoaded', (...arg) => console.info('dataLoaded', ...arg))
    plugin.hooks.on('stateChange', (...arg) => console.info('stateChange', ...arg))
    plugin.hooks.on('enable', (...arg) => console.info('enable', ...arg))
    plugin.hooks.on('disable', (...arg) => console.info('disable', ...arg))
  }, [])

  function enable() {
    // plugin.enable()
    plugin.setState({ enabled: true })
  }

  function disable() {
    // plugin.disable()
    plugin.setState({ enabled: false })
  }

  function show() {
    // plugin.show()
    plugin.setState({ visible: true })
  }

  function hide() {
    // plugin.hide()
    plugin.setState({ visible: false })
  }

  function flow() {
    // plugin.flow()
    plugin.setState({ isFlowing: true })
  }

  function stopFlow() {
    // plugin.stopFlow()
    plugin.setState({ isFlowing: false })
  }

  function changePipeline() {
    setPipelineIndex(typeof pipelineIndex === 'number' ? (pipelineIndex + 1) % pipelines.length : 0)
  }

  function switchAllPipeline() {
    setPipelineIndex(undefined)
  }

  if (!pluginServerDada) return null

  return (
    <div className="pipeline-plugin-btn-group">
      <div className="left-group" key="left-group">
        <Button key="showFiveFloorplan" variant="contained" onClick={() => five.changeMode('Floorplan')}>
          模型
        </Button>
        <Button key="showFivePanorama" variant="contained" onClick={() => five.changeMode('Panorama')}>
          全景
        </Button>
      </div>
      <div className="right-group" key="right-group">
        <Button key="show" variant="contained" onClick={show}>
          展示
        </Button>
        <Button key="hide" variant="contained" onClick={hide}>
          隐藏
        </Button>
        <Button key="flow" variant="contained" onClick={flow}>
          流动
        </Button>
        <Button key="stopFlow" variant="contained" onClick={stopFlow}>
          停止流动
        </Button>
        <Button key="switchPipeline" variant="contained" onClick={changePipeline}>
          切换选择管道
        </Button>
        <Button key="switchAllPipeline" variant="contained" onClick={switchAllPipeline}>
          选择所有管道
        </Button>
        <Button key="enable" variant="contained" onClick={enable}>
          启用
        </Button>
        <Button key="disable" variant="contained" onClick={disable}>
          禁用
        </Button>
      </div>
    </div>
  )
}

export default TopviewFloorplanPluginUse
