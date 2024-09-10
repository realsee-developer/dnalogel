import { unsafe__useFiveInstance } from '@realsee/five/react'
import { ButtonGroup, Button, Stack, Switch } from '@mui/material'
import { Sculpt } from '@realsee/dnalogel/dist'
import data from './mocks/data.json'
import { useEffect, useState } from 'react'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import { CustomWork } from '../components/CustomWork'
import { LineMesh } from '@realsee/dnalogel/libs/Sculpt/Meshes/Line'
import { PointIntersection } from '@realsee/dnalogel/libs/shared-utils'
import { PointMesh } from '@realsee/dnalogel/libs/Sculpt/Meshes/Point'
import { rayOnLine } from '@realsee/dnalogel/libs/Sculpt/utils/three/rayOnLine'
import * as THREE from 'three'

const defaultCreateStyle: any = {
  occlusionVisibility: true,
  occlusionMode: 'translucence' as const,
  lengthEnable: true,
}

const Use = () => {
  const five = unsafe__useFiveInstance()
  const sculpt = five.plugins.Sculpt as Sculpt
  const [action, setAction] = useState<string>('virtualPoint')
  const [limit, setLimit] = useState<string>('none')

  let startLine = {} as any

  const changeAction = (type: string) => {
    Sculpt.modules.pointSelector.actionIfNoModelUnderMouse = type
    setAction(type)
  }

  const changeLimit = (limit: string) => {
    defaultCreateStyle.limit = limit
    setLimit(limit)
  }

  const yuanzhangdemo = () => {
    const pointSelector = Sculpt.modules.pointSelector
    const container = five.scene
    const style = {
      ...defaultCreateStyle,
      color: 0x67af6a,
      lineColor: 0xa9eadc,
      lineWidth: 2,
    }

    const limit = 'none'

    const previewLine = new LineMesh(style)
    container.add(previewLine)

    // 垂直辅助线
    const verticalLine = new LineMesh({ ...style, dashed: true, lengthEnable: false })
    container.add(verticalLine)

    pointSelector.enable()

    // 实时的预览点
    let previewPoint: THREE.Vector3
    let planeHelper: THREE.Plane

    // 选点处理函数
    const onSelect = (intersection: PointIntersection) => {
      // const point = points.length === 0 ? intersection.point : previewPoint.clone()
      if (!startLine.start) {
        const startPosition = intersection.point.clone()
        console.log(startPosition)
        const normal = startPosition.clone().sub(five.camera.position).normalize().multiplyScalar(10)
        const a = new PointMesh({ points: startPosition, ...style, color: 0xff0000 })
        a.position.set(startPosition.x, startPosition.y, startPosition.z)
        container.add(a)
        container.add(
          new LineMesh({ points: [five.camera.position.clone(), startPosition.clone().add(normal)], ...style, lengthEnable: false }),
        )
        pointSelector.disable()

        startLine.start = five.camera.position.clone()
        startLine.end = startPosition.clone()
      } else {
        startLine = {}

        pointSelector.disable()
      }
    }
    // 预览
    const onPreview = (intersection: PointIntersection | null) => {
      const clearPreview = () => {
        previewLine.setPoints([])
        verticalLine.setPoints([])
      }
      if (!intersection) return clearPreview()

      if (startLine.start) {
        const line = new THREE.Line3(startLine.start, startLine.end)
        const previewPoint = rayOnLine({ raycaster: intersection.raycaster!, line, clampToLine: false })

        const raycaster = new THREE.Raycaster(previewPoint.clone(), new THREE.Vector3(0, -1, 0))
        raycaster.params.Points!.threshold = 0.02

        console.log(raycaster.intersectObject(five.model, true))
        // previewLine.setPoints([previewPoint, previewPoint.clone().add(new THREE.Vector3(0, -10, 0))])

        const intersectPoint = raycaster.intersectObject(five.model, true)?.[0]?.point

        if (intersectPoint) {
          previewLine.setPoints([previewPoint, intersectPoint])
        }
      }
    }

    const selectEnd = () => {
      pointSelector.off('select', onSelect)
      pointSelector.off('intersectionUpdate', onPreview)
      pointSelector.off('disable', cancel)
      pointSelector.plane = null
      pointSelector.disable()
      container?.remove(verticalLine)
    }

    const cancel = () => {
      selectEnd()
    }

    pointSelector.on('select', onSelect)
    pointSelector.on('intersectionUpdate', onPreview)
    pointSelector.on('disable', cancel)
  }

  return (
    <>
      <FiveModeSwitcher modeList={['Mapview', 'Panorama', 'Model']} />
      <CustomWork onChangeWork={() => sculpt.clear()} />
      <Stack sx={{ position: 'absolute', right: 0, display: 'flex', alignItems: 'end' }} spacing={1}>
        <ButtonGroup sx={{ width: 'max-content' }} orientation="vertical" color="inherit" variant="contained">
          <Button color="primary" variant="contained">
            长度显示
            <Switch
              defaultChecked={true}
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
          <Button onClick={() => yuanzhangdemo()}>双目</Button>
          <Button onClick={() => sculpt.createPoint({ ...defaultCreateStyle })}>点</Button>
          <Button onClick={() => sculpt.createline({ ...defaultCreateStyle })}>线段</Button>
          <Button onClick={() => sculpt.createPolyline({ ...defaultCreateStyle })}>折线</Button>
          <Button onClick={() => sculpt.createPolygon({ ...defaultCreateStyle })}>多边形</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle, drawMethod: 'vertex' })}>矩形</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle, drawMethod: 'diagonal' })}>矩形【对角线】</Button>
          <Button onClick={() => sculpt.createBox({ ...defaultCreateStyle })}>长方体</Button>
          <Button onClick={() => sculpt.createPrism({ ...defaultCreateStyle })}>多棱柱</Button>
          <Button onClick={() => sculpt.createCircle({ ...defaultCreateStyle })}>圆</Button>
          <Button onClick={() => sculpt.createCylinder({ ...defaultCreateStyle })}>圆柱体</Button>
          <Button color="error" variant="outlined" onClick={() => sculpt.clear()}>
            清空
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  )
}

export default Use
function withResolvers<T>(): { promise: any; resolve: any; reject: any } {
  throw new Error('Function not implemented.')
}
