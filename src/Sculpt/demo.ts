import { Sculpt } from '@realsee/dnalogel/dist'
import { LineMesh } from '@realsee/dnalogel/libs/Sculpt/Meshes/Line'
import { PointIntersection } from '@realsee/dnalogel/libs/shared-utils'
import { PointMesh } from '@realsee/dnalogel/libs/Sculpt/Meshes/Point'
import { rayOnLine } from '@realsee/dnalogel/libs/Sculpt/utils/three/rayOnLine'
import * as THREE from 'three'
import type { PointSelector } from '@realsee/dnalogel/dist/shared-utils/three/PointSelector'
import type { CreateLimitConfig } from '@realsee/dnalogel/dist/Sculpt/typings/style'
import type { Five } from '@realsee/five'

const defaultCreateStyle: any = {
  occlusionVisibility: true,
  occlusionMode: 'translucence' as const,
  lengthEnable: true,
}

let startLine = {} as any

/**
 * @description 绘制线段
 * @param config.limit 限制折线绘制的平面; `xoz` 限制在水平面; `y` 限制垂直面; `none` 不限制；默认 `none`
 */
export function createLine(lineMesh: LineMesh, pointSelector: PointSelector, config?: Partial<CreateLimitConfig>) {
  const container = lineMesh.parent
  if (!container) return

  const limit = config?.limit ?? 'none'

  const previewLine = new LineMesh(lineMesh.style)
  container.add(previewLine)

  // 垂直辅助线
  const verticalLine = new LineMesh({ ...lineMesh.style, dashed: true, lengthEnable: false })
  container.add(verticalLine)

  pointSelector.enable()

  const points: THREE.Vector3[] = lineMesh.points.map((p) => p.clone())

  // 实时的预览点
  let previewPoint: THREE.Vector3
  let planeHelper: THREE.Plane

  let lastIntersection: PointIntersection

  // 选点处理函数
  const onSelect = (intersection: PointIntersection) => {
    const point = points.length === 0 ? intersection.point : previewPoint.clone()
    points.push(point)
    lineMesh.setPoints(points)
    if (points.length === 2) {
      selectEnd()
    }
  }
  // 预览
  const onPreview = (intersection: PointIntersection | null) => {
    const clearPreview = () => {
      previewLine.setPoints([])
      verticalLine.setPoints([])
      pointSelector.pointSelectorHelper.magnifier!.render()
    }
    if (!points?.length) return clearPreview()
    if (!intersection) return clearPreview()

    lastIntersection = intersection

    const lastPoint = points[points.length - 1]!.clone()

    if (limit === 'none') {
      // 自由选点
      previewPoint = intersection.point
      previewLine.setPoints([lastPoint, previewPoint])
    } else if (limit === 'xoz') {
      // 水平面选点
      pointSelector.plane = planeHelper
      planeHelper = planeHelper ?? new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), points[0])
      previewPoint = planeHelper.projectPoint(intersection.point, new THREE.Vector3())
      previewLine.setPoints([lastPoint, previewPoint])
      verticalLine.setPoints([previewPoint, intersection.point])
    } else if (limit === 'y') {
      if (!intersection.isVirtual) {
        // 真实点
        const line = new THREE.Line3(points[0].clone(), new THREE.Vector3(0, 1, 0).add(points[0]))
        previewPoint = line.closestPointToPoint(intersection.point, false, new THREE.Vector3())
        verticalLine.setPoints([previewPoint, intersection.point])
      } else {
        // 垂直面选点
        previewPoint = rayOnLine({
          raycaster: intersection.raycaster!,
          line: new THREE.Line3(points[0].clone(), new THREE.Vector3(0, 1, 0).add(points[0])),
          clampToLine: false,
        })
        verticalLine.setPoints([])
      }
      previewLine.setPoints([lastPoint, previewPoint])
      // verticalLine.setPoints([previewPoint, intersection.point])
    }
  }

  const selectEnd = () => {
    pointSelector.off('select', onSelect)
    pointSelector.off('intersectionUpdate', onPreview)
    pointSelector.off('disable', cancel)
    pointSelector.plane = null
    pointSelector.disable()
    container?.remove(previewLine, verticalLine)
  }

  const cancel = () => {
    selectEnd()
    if (points.length !== 2) {
      container?.remove(lineMesh)
    }
  }

  pointSelector.on('select', onSelect)
  pointSelector.on('intersectionUpdate', onPreview)
  pointSelector.on('disable', cancel)
}

export const yuanzhangdemo = (five: Five) => {
  const pointSelector = Sculpt.modules.pointSelector
  const container =
    five.scene.getObjectByName('yuanzhangdemo') ??
    (() => {
      const group = new THREE.Group()
      group.name = 'yuanzhangdemo'
      five.scene.add(group)
      return group
    })()
  const style = {
    ...defaultCreateStyle,
    color: 0x67af6a,
    lineColor: 0xa9eadc,
    lineWidth: 2,
  }

  const previewPointMesh = new PointMesh({ ...style, points: new THREE.Vector3(0, 0, 0), color: 0xffffff })
  previewPointMesh.visible = false
  container.add(previewPointMesh)

  const previewLine = new LineMesh(style)
  container.add(previewLine)

  // 垂直辅助线
  const verticalLine = new LineMesh({ ...style, dashed: false, lengthEnable: true })
  container.add(verticalLine)

  pointSelector.enable()

  // 选点处理函数
  const onSelect = (intersection: PointIntersection) => {
    // const point = points.length === 0 ? intersection.point : previewPoint.clone()
    if (!startLine.start) {
      const startPosition = intersection.point.clone()
      const normal = startPosition.clone().sub(five.camera.position).normalize().multiplyScalar(100)
      const a = new PointMesh({ points: startPosition, ...style, color: 0xff0000 })
      a.position.set(startPosition.x, startPosition.y, startPosition.z)
      container.add(a)
      container.add(
        new LineMesh({ points: [startPosition.clone().sub(normal), startPosition.clone().add(normal)], ...style, lengthEnable: false }),
      )
      pointSelector.disable()

      startLine.start = five.camera.position.clone()
      startLine.end = startPosition.clone()
    } else {
      startLine = {}

      const normal = verticalLine.points[0].clone().sub(five.camera.position).normalize().multiplyScalar(100)

      container.add(
        new LineMesh({
          points: [verticalLine.points[0].clone().sub(normal), verticalLine.points[0].clone().add(normal)],
          ...style,
          lengthEnable: false,
        }),
      )

      pointSelector.disable()

      createLine(verticalLine, pointSelector as any, { limit: 'y' })
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

      previewPointMesh.position.copy(previewPoint)
      previewPointMesh.visible = true

      verticalLine.setPoints([previewPoint])
    }
  }

  const selectEnd = () => {
    pointSelector.off('select', onSelect)
    pointSelector.off('intersectionUpdate', onPreview)
    pointSelector.off('disable', cancel)
    pointSelector.plane = null
    pointSelector.disable()
  }

  const cancel = () => {
    selectEnd()
  }

  pointSelector.on('select', onSelect)
  pointSelector.on('intersectionUpdate', onPreview)
  pointSelector.on('disable', cancel)
}

export const clearDemo = (five: Five) => {
  const group = five.scene.getObjectByName('yuanzhangdemo')
  if (group) {
    group.children.forEach((child) => {
      child.dispatchEvent({ type: 'removed' })
    })
    five.scene.remove(group)
  }
}
