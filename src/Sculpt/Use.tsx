import { unsafe__useFiveInstance } from '@realsee/five/react'
import { ButtonGroup, Button, Stack, Switch, Paper } from '@mui/material'
import { Sculpt } from '@realsee/dnalogel/dist'
import data from './mocks/data.json'
import { useEffect, useState } from 'react'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import { CustomWork } from '../components/CustomWork'
import { clearDemo, yuanzhangdemo } from './demo'
import * as THREE from 'three'
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

  const changeAction = (type: string) => {
    Sculpt.modules.pointSelector.actionIfNoIntersection = type
    setAction(type)
  }

  const changeLimit = (limit: string) => {
    defaultCreateStyle.limit = limit
    setLimit(limit)
  }

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
          <Button onClick={() => sculpt.createPoint({ ...defaultCreateStyle })}>点</Button>
          <Button onClick={() => sculpt.createLine({ ...defaultCreateStyle })}>线段</Button>
          <Button onClick={() => sculpt.createPolyline({ ...defaultCreateStyle })}>折线</Button>
          <Button onClick={() => sculpt.createPolygon({ ...defaultCreateStyle })}>多边形</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle, drawMethod: 'vertex' })}>矩形</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle, drawMethod: 'diagonal' })}>矩形【对角线】</Button>
          <Button onClick={() => sculpt.createBox({ ...defaultCreateStyle, drawMethod: 'vertex' })}>长方体</Button>
          <Button onClick={() => sculpt.createBox({ ...defaultCreateStyle, drawMethod: 'diagonal' })}>长方体【对角线】</Button>
          <Button onClick={() => sculpt.createPrism({ ...defaultCreateStyle })}>多棱柱</Button>
          <Button onClick={() => sculpt.createCircle({ ...defaultCreateStyle })}>圆</Button>
          <Button onClick={() => sculpt.createCylinder({ ...defaultCreateStyle })}>圆柱体</Button>
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
