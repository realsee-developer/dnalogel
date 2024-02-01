import { Box, Paper, ButtonGroup, Button, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { PanoMeasurePlugin, PanoMeasurePluginPolylineJson, PanoMeasurePluginPolyline } from '@realsee/dnalogel/dist'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import * as React from 'react'
import { useEffect } from 'react'
import { mockMeasureRulerServerData } from './mockData'
import { Five, Mode } from '@realsee/five'

const PanoMeasurePluginUsage = () => {
  const five = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const panoMeasurePlugin = five.plugins.panoMeasurePlugin as ReturnType<typeof PanoMeasurePlugin>
  const [measureEnableBtn, setMeasureEnableBtn] = React.useState<boolean>(true)
  const [isDefaultUnit, setIsDefaultUnit] = React.useState(true)

  function toggleUnit() {
    setIsDefaultUnit(!isDefaultUnit)
  }

  React.useEffect(() => {
    panoMeasurePlugin.changeConfigs({
      getDistanceText(distance) {
        return isDefaultUnit ? distance.toFixed(1).toString() + 'm' : (distance * 3.2808).toFixed(1) + 'ft'
      },
      getAreaText(area) {
        return isDefaultUnit ? area.toFixed(2).toString() + '㎡' : (area * 10.7639).toFixed(2) + 'ft²'
      },
    })
  }, [isDefaultUnit])

  const handlePanoMeasurePluginListener = () => {
    panoMeasurePlugin.hook.on('modeChange', (mode) => {
      console.info('__mode__', mode)
    })

    panoMeasurePlugin.hook.on('enable', () => {
      console.info('开启测量工具')
      setMeasureEnableBtn(false)
    })

    panoMeasurePlugin.hook.on('disable', () => {
      console.info('关闭测量工具')
      setMeasureEnableBtn(true)
    })
  }

  useEffect(() => {
    handlePanoMeasurePluginListener()

    const container = document.querySelector('.plugin-full-screen-container') as HTMLElement
    if (container) {
      panoMeasurePlugin.appendTo(container)
    }
  }, [])

  const handleMeasureEnable = (isMobile: boolean) => {
    panoMeasurePlugin.changeIsMobile(isMobile)
    panoMeasurePlugin.enable({ mode: 'Mixed' })
    setMeasureEnableBtn(false)
  }

  // =================== 编辑标尺代码片段 ===================
  // 后端数据
  const serverData = React.useRef<{ id: number; polyline: PanoMeasurePluginPolylineJson }[]>(mockMeasureRulerServerData)
  // 当前正在修改的 ID
  const modifyID = React.useRef<number | null>(null)
  // 当前正在编辑的线段 ID
  const currentLineID = React.useRef<string | null>(null)
  // 当前正在编辑的折线段
  const currentEditedPolyline = React.useRef<PanoMeasurePluginPolyline | null>(null)
  Object.assign(window, {
    serverData,
    listenPolylineChange,
    changeToMeasureTags,
    setPluginDefaultText,
    clearPluginDefaultText,
    setCurrentLineText,
    onSaveLine,
    addNewPolyline,
    changeIsMobile,
    onModifyPolyline,
  })

  // 当前编辑的虚线发生改变时，查看线段展示的文字内容
  // 虚线不存在时 line === null
  // panoMeasurePlugin.hook.on('editedDashedLineChange', (line) => {
  //   console.info('__editedDashedLineChange__', line?.distanceItem.getCurrentContent())
  // })

  // 监听编辑态下的折线变化
  function listenPolylineChange() {
    panoMeasurePlugin.hook.on('editedPolylineChange', onEditedPolylineChange)

    function onEditedPolylineChange(polyline: PanoMeasurePluginPolyline) {
      console.info('__editedLineChange__', polyline)
      if (polyline.lines.length === 1) {
        const line = polyline.lines[0]
        currentLineID.current = line.id
        currentEditedPolyline.current = polyline
        panoMeasurePlugin.save()
      }
    }

    return function dispose() {
      panoMeasurePlugin.hook.off('editedPolylineChange', onEditedPolylineChange)
    }
  }

  // 切换到标尺工具栏
  function changeToMeasureTags() {
    const pluginData = { polylines: serverData.current.map((item) => item.polyline) }
    panoMeasurePlugin.load(pluginData)
    panoMeasurePlugin.enable({ mode: 'View' })
  }

  // 点击新增按钮
  function addNewPolyline() {
    console.info('🐶 ~ panoMeasurePlugin.getCurrentMode()', panoMeasurePlugin.getCurrentMode())
    // 先把数据置空
    panoMeasurePlugin.load({ polylines: [] })
    // 进入编辑态
    panoMeasurePlugin.edit()
  }

  // 点击保存按钮
  function onSaveLine() {
    if (!currentEditedPolyline.current || !serverData.current) return
    const polylineJson = currentEditedPolyline.current.toJson()
    polylineJson.visiblePanoIndexes = [five.getCurrentState().panoIndex]
    if (modifyID.current) {
      const data = mockServerModify(modifyID.current, polylineJson)
      const index = serverData.current.findIndex((item) => item.id === modifyID.current)
      serverData.current[index] = data
    } else {
      const data = mockServerAdd(polylineJson)
      serverData.current.push(data)
    }
    // 保存数据时，需要情况之前设置的默认文本，不然新建新的线时使用的还是旧的默认文本
    clearPluginDefaultText()
    // 保存数据时，需要清空当前线的id
    currentLineID.current = null
    modifyID.current = null
    currentEditedPolyline.current = null
    const pluginData = { polylines: serverData.current.map((item) => item.polyline) }
    panoMeasurePlugin.load(pluginData)
  }

  // 编辑已有数据
  function onModifyPolyline(id: number) {
    modifyID.current = id
    addNewPolyline()
  }

  // 清除默认文本
  function clearPluginDefaultText() {
    panoMeasurePlugin.changeConfigs({ defaultText: null })
  }

  // 添加前和编辑中，设置文本
  function setPluginDefaultText() {
    panoMeasurePlugin.changeConfigs({ defaultText: '默认文本' })
  }

  // 已经添加完线段时，设置文本
  function setCurrentLineText(text: string) {
    if (!currentLineID.current) return
    panoMeasurePlugin.setCustomText(currentLineID.current, text)
  }

  // 模拟新增数据
  function mockServerAdd(polyline: PanoMeasurePluginPolylineJson) {
    const id = new Date().getTime()
    return { id, polyline: polyline }
  }

  // 模拟更改数据
  function mockServerModify(id: number, polyline: PanoMeasurePluginPolylineJson) {
    return { id, polyline: polyline }
  }

  // ==================== 模拟 Editor-Mobile 行为 ====================
  function changeIsMobile(isMobile: boolean) {
    panoMeasurePlugin.changeIsMobile(isMobile)
  }

  return (
    <Box>
      <Paper sx={{ position: 'fixed', bottom: 0 }} style={{ borderRadius: '4px', overflow: 'hidden' }}>
        <BottomNavigation
          showLabels
          value={fiveState.mode}
          onChange={(_, newValue: Mode) => {
            setFiveState({ mode: newValue })
          }}
        >
          <BottomNavigationAction label="全景漫游" value={Five.Mode.Panorama} />
          <BottomNavigationAction label="空间总览" value={Five.Mode.Floorplan} />
        </BottomNavigation>
      </Paper>
      <Paper
        sx={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
        }}
      >
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical" variant="contained">
          <Button
            onClick={() => {
              handleMeasureEnable(false)
            }}
          >
            开启测量工具(pc端)
          </Button>
          <Button
            onClick={() => {
              handleMeasureEnable(true)
            }}
          >
            开启测量工具(移动端)
          </Button>
          <Button variant="contained" onClick={toggleUnit}>
            切换单位
          </Button>
        </ButtonGroup>
      </Paper>
    </Box>
  )
}

export default PanoMeasurePluginUsage
