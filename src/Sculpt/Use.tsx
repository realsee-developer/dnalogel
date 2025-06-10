import { unsafe__useFiveInstance } from '@realsee/five/react'
import { ButtonGroup, Button, Stack, Switch, Paper, Typography, Slider, Box } from '@mui/material'
import { Sculpt } from '@realsee/dnalogel/dist'
import data from './mocks/data.json'
import { useEffect, useState } from 'react'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import { CustomWork } from '../components/CustomWork'
import { clearDemo, yuanzhangdemo } from './demo'
import { Util } from '@realsee/dnalogel/dist'

const defaultCreateStyle: any = {
  occlusionVisibility: true,
  occlusionMode: 'translucence' as const,
  lengthEnable: false,
}

const Use = () => {
  const five = unsafe__useFiveInstance()
  const sculpt = five.plugins.Sculpt as Sculpt
  const [action, setAction] = useState<string>('virtualPoint')
  const [limit, setLimit] = useState<string>('none')
  const [magnifierEnabled, setMagnifierEnabled] = useState<boolean>(true)
  const [magnifierScale, setMagnifierScale] = useState<number>(2.5)
  const [magnifierSize, setMagnifierSize] = useState<number>(200)

  const changeAction = (type: string) => {
    Sculpt.modules.pointSelector.actionIfNoIntersection = type
    setAction(type)
  }

  const changeLimit = (limit: string) => {
    defaultCreateStyle.limit = limit
    setLimit(limit)
  }

  // 更新放大镜配置
  const updateMagnifierConfig = () => {
    const pointSelector = Sculpt.modules.pointSelector
    if (pointSelector && pointSelector.pointSelectorHelper) {
      const magnifier = pointSelector.pointSelectorHelper.magnifier
      const helper = pointSelector.pointSelectorHelper

      if (magnifier) {
        if (!magnifierEnabled) {
          // 禁用放大镜时，彻底清除所有效果
          magnifier.clear() // 清除画布内容
          magnifier.disable() // 禁用并隐藏

          // 额外确保画布完全隐藏
          const canvas = magnifier.canvas
          if (canvas) {
            canvas.style.visibility = 'hidden'
            canvas.style.display = 'none'
            // 清除任何可能的渲染内容
            const context = canvas.getContext('2d')
            if (context) {
              context.clearRect(0, 0, canvas.width, canvas.height)
            }
            // 移除canvas从DOM中，确保彻底隐藏
            if (canvas.parentNode) {
              canvas.parentNode.removeChild(canvas)
            }
          }
        } else {
          magnifier.enable()

          // 恢复画布显示
          const canvas = magnifier.canvas
          if (canvas) {
            canvas.style.display = 'block'
            canvas.style.visibility = 'visible'
          }

          // 使用正确的方法更新放大镜配置
          if ('updateScale' in magnifier && typeof magnifier.updateScale === 'function') {
            magnifier.updateScale(magnifierScale)
          }
          if ('updateSize' in magnifier && typeof magnifier.updateSize === 'function') {
            magnifier.updateSize(magnifierSize)
          }
        }
      }
    }
  }

  useEffect(() => {
    updateMagnifierConfig()
  }, [magnifierEnabled, magnifierScale, magnifierSize])

  useEffect(() => {
    if (!five.getElement()) return
    const disposers: (() => void)[] = []
    const wrapper = document.createElement('div')
    wrapper.style.cssText = 'position: absolute; top: 90px; right: 24px; width: 160px; height: 160px;'
    if (five.plugins.OrientationPlugin) {
      const onModelLoaded = () => {
        five.plugins.OrientationPlugin.enable()
        five.getElement()!.parentElement!.appendChild(wrapper)
        five.plugins.OrientationPlugin.appendTo(wrapper)
      }
      Util.waitFiveModelLoaded(five).then(() => {
        onModelLoaded()
      })
      disposers.push(() => {
        if (wrapper.parentNode) wrapper.parentNode.removeChild(wrapper)
        five.plugins.OrientationPlugin.dispose()
      })
    }
    return () => {
      disposers.forEach((one) => one())
    }
  }, [])

  useEffect(() => {
    if (!five.work?.workCode) {
      sculpt.load(data, { occlusionVisibility: true, defaultAction: false })
      sculpt.on('click', (e, item) => {
        item.select({ only: true })
        item.editor.enable()
        item.editor.hooks.on('objectUpdate', () => {
          console.info('new Data: ', item.data)
        })
        return false
        // const x = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX
        // const y = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY
        // item.showDeleteButton(x, y)
      })
    }
    return () => {
      sculpt.clear()
    }
  }, [five])

  return (
    <>
      <FiveModeSwitcher modeList={['Mapview', 'Panorama', 'Model']} />
      <Paper sx={{ position: 'fixed', bottom: 0, right: 230 }}>
        <Button
          onClick={() => {
            five.setState({
              mode: 'Mapview',
              offset: five.camera.position.clone(),
              fov: five.state.fov,
              distance: 0,
              latitude: five.state.latitude,
              longitude: five.state.longitude,
            })
          }}
        >
          Mapview 当前视角
        </Button>
      </Paper>
      <CustomWork onChangeWork={() => sculpt.clear()} />

      {/* 放大镜配置面板 */}
      <Paper sx={{ position: 'fixed', top: 20, right: 20, p: 2, width: 280 }}>
        <Typography variant="h6" gutterBottom>
          放大镜配置
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">启用放大镜</Typography>
          <Switch checked={magnifierEnabled} onChange={(e) => setMagnifierEnabled(e.target.checked)} />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">放大倍数: {magnifierScale}x</Typography>
          <Slider
            value={magnifierScale}
            onChange={(_, value) => setMagnifierScale(value as number)}
            min={1}
            max={5}
            step={0.1}
            disabled={!magnifierEnabled}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">放大镜大小: {magnifierSize}px</Typography>
          <Slider
            value={magnifierSize}
            onChange={(_, value) => setMagnifierSize(value as number)}
            min={100}
            max={400}
            step={10}
            disabled={!magnifierEnabled}
          />
        </Box>
      </Paper>

      <Stack sx={{ position: 'absolute', right: 0, display: 'flex', alignItems: 'end' }} spacing={1}>
        <ButtonGroup sx={{ width: 'max-content' }} orientation="vertical" color="inherit" variant="contained">
          <Button color="primary" variant="contained">
            长度显示
            <Switch
              defaultChecked={false}
              onChange={(e) => {
                sculpt.items.forEach((item) => {
                  if (item.type !== 'Circle' && item.type !== 'Cylinder') {
                    const obj = item.children?.[0] as any
                    obj.setStyle({ lengthEnable: e.target.checked })
                  }
                })
                defaultCreateStyle.lengthEnable = e.target.checked
              }}
            />
          </Button>
        </ButtonGroup>
        <ButtonGroup sx={{ width: 'max-content' }} color="inherit" variant="contained">
          <Button color={action === 'virtualPoint' ? 'primary' : undefined} onClick={() => changeAction('virtualPoint')}>
            虚拟点
          </Button>
          <Button color={action === 'lastPoint' ? 'primary' : undefined} onClick={() => changeAction('lastPoint')}>
            最新可用点
          </Button>
          <Button color={action === 'disable' ? 'primary' : undefined} onClick={() => changeAction('disable')}>
            禁用
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={1}>
        <ButtonGroup sx={{ width: 'max-content' }} color="inherit" variant="contained">
          <Button color={limit === 'none' ? 'primary' : undefined} onClick={() => changeLimit('none')}>
            自由
          </Button>
          <Button color={limit === 'xoz' ? 'primary' : undefined} onClick={() => changeLimit('xoz')}>
            水平
          </Button>
          <Button color={limit === 'y' ? 'primary' : undefined} onClick={() => changeLimit('y')}>
            垂直
          </Button>
        </ButtonGroup>
        <ButtonGroup sx={{ width: 'max-content' }} orientation="vertical" color="inherit" variant="contained">
          <Button onClick={() => yuanzhangdemo(five)}>双目</Button>
          <Button onClick={() => sculpt.createPoint({ ...defaultCreateStyle })}>点(Point)</Button>
          <Button onClick={() => sculpt.createLine({ ...defaultCreateStyle })}>线段(Line)</Button>
          <Button onClick={() => sculpt.createPolyline({ ...defaultCreateStyle })}>折线(PolyLine)</Button>
          <Button onClick={() => sculpt.createPolygon({ ...defaultCreateStyle })}>多边形(Polygon)</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle, drawMethod: 'vertex' })}>矩形(Rectangle)</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle, drawMethod: 'diagonal' })}>矩形【对角线】</Button>
          <Button onClick={() => sculpt.createBox({ ...defaultCreateStyle, drawMethod: 'vertex' })}>长方体(Box)</Button>
          <Button onClick={() => sculpt.createBox({ ...defaultCreateStyle, drawMethod: 'diagonal' })}>长方体【对角线】</Button>
          <Button onClick={() => sculpt.createPrism({ ...defaultCreateStyle })}>多棱柱(Prism)</Button>
          <Button onClick={() => sculpt.createCircle({ ...defaultCreateStyle })}>圆(Circle)</Button>
          <Button onClick={() => sculpt.createCylinder({ ...defaultCreateStyle })}>圆柱体(Cylinder)</Button>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              sculpt.clear()
              clearDemo(five)
            }}
          >
            清空
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  )
}

export default Use
