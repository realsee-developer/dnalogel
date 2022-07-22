<script lang="ts">
  import { Five } from '@realsee/five'
  import { nextFrame } from '../shared-utils/animationFrame'
  import equal from '../shared-utils/equal'
  import { intersectionOfLine } from '../shared-utils/math/planimetry'
  import throttle from '../shared-utils/throttle'
  import { onDestroy, onMount } from 'svelte'
  import { Vector3 } from 'three'
  import RulerItem from './RulerItem.svelte'
  import type { PanoRulerProPluginDatas, PanoRulerProPluginOptions, RulerItemProp } from './typings'
  export let five: Five
  export let rulerDatas: PanoRulerProPluginDatas
  export let options: PanoRulerProPluginOptions
  let rulerItemProp: RulerItemProp[] = []

  const canvasWidth = five.getElement()?.parentElement?.clientWidth || 0
  const canvasHeight = five.getElement()?.parentElement?.clientHeight || 0

  const getRuleScreenIntr = (
    startPoint: { x: number; y: number },
    endPoint: { x: number; y: number },
  ) => {
    const screenLines = [
      [
        { x: 0, y: 0 },
        { x: canvasWidth, y: 0 },
      ],
      [
        { x: 0, y: 0 },
        { x: 0, y: canvasHeight },
      ],
      [
        { x: canvasWidth, y: 0 },
        { x: canvasWidth, y: canvasHeight },
      ],
      [
        { x: 0, y: canvasHeight },
        { x: canvasWidth, y: canvasHeight },
      ],
    ]
    const intr: any[] = []
    for (let i = 0; i < screenLines.length; i++) {
      const result = intersectionOfLine(
        [startPoint, endPoint],
        [screenLines[i][0], screenLines[i][1]],
        true,
      )
      if (result) intr.push(result)
    }
    if (intr.length === 0) return false
    else {
      return intr
    }
  }

  const getPosition = (start: Vector3, end: Vector3) => {
    const startPoint = start.clone().project(five.camera)
    const startLeft = ((startPoint.x + 1) / 2) * canvasWidth
    const startTop = ((-startPoint.y + 1) / 2) * canvasHeight

    const endPoint = end.clone().project(five.camera)
    const endLeft = ((endPoint.x + 1) / 2) * canvasWidth
    const endTop = ((-endPoint.y + 1) / 2) * canvasHeight
    const distance = Math.sqrt(Math.pow(endLeft - startLeft, 2) + Math.pow(endTop - startTop, 2))
    return {
      startLeft,
      startTop,
      endLeft,
      endTop,
      distance,
    }
  }

  const getPositionAndVisible = (start: Vector3, end: Vector3, visibleOrigin: Vector3) => {
    const cameraPosition = five.camera.position
    const cameraDirection = five.camera.getWorldDirection(new Vector3())
    const startAngle = start.clone().sub(cameraPosition).normalize().angleTo(cameraDirection)
    const endAngle = end.clone().sub(cameraPosition).normalize().angleTo(cameraDirection)
    const ruleLength = start.distanceTo(end)
    const midPoint = end.clone().sub(end.clone().sub(start).divide(new Vector3(2, 2, 2)))
    const disFromCameraToMid = midPoint.distanceTo(cameraPosition)
    const { startLeft, startTop, endLeft, endTop, distance } = getPosition(start, end)
    const rad = Math.PI / 2 - Math.atan2(endLeft - startLeft, startTop - endTop)
    const deg = -(rad / Math.PI) * 180

    let visible = true

    if (!visibleOrigin) visible = false
    // 只显示拐点相连的线
    if (!equal(start, visibleOrigin) && !equal(end, visibleOrigin)) {
      visible = false
    }
    // 线小于0.3m隐藏
    if (ruleLength < 0.3) {
      visible = false
    }

    if (startAngle > Math.PI / 2) {
      visible = false
    }

    if (endAngle > Math.PI / 2) {
      visible = false
    }

    if (disFromCameraToMid / ruleLength > 8) {
      visible = false
    }

    let labelOffset = 50
    let visibleLength = distance
    const intr: any = getRuleScreenIntr(
      { x: ~~startLeft, y: ~~startTop },
      { x: ~~endLeft, y: ~~endTop },
    )
    if (intr && intr.length === 1) {
      if (equal(start, visibleOrigin)) {
        visibleLength = Math.sqrt(
          Math.pow(intr[0].x - startLeft, 2) + Math.pow(intr[0].y - startTop, 2),
        )
        labelOffset = (visibleLength / distance) * 50
      } else if (equal(end, visibleOrigin)) {
        visibleLength = Math.sqrt(
          Math.pow(intr[0].x - endLeft, 2) + Math.pow(intr[0].y - endTop, 2),
        )
        labelOffset = 100 - (visibleLength / distance) * 50
      }
    }
    if (intr && intr.length === 2) {
      const middlePoint = {
        x: (intr[0].x + intr[1].x) / 2,
        y: (intr[0].y + intr[1].y) / 2,
      }
      const distanceFromStart = Math.sqrt(
        Math.pow(middlePoint.x - startLeft, 2) + Math.pow(middlePoint.y - startTop, 2),
      )
      labelOffset = (distanceFromStart / distance) * 100
    }

    return {
      startLeft,
      startTop,
      distance,
      deg,
      visible,
      labelOffset,
      ruleLength,
    }
  }

  const updatePanoRulerData = () => {
    const panoIndex = five.panoIndex
    const rulerData = rulerDatas.find((data) => data.panoIndex === panoIndex)
    if (!rulerData) return (rulerItemProp = [])

    // 非全景模式下隐藏所有标尺
    if (five.currentMode !== Five.Mode.Panorama) return (rulerItemProp = [])

    const cameraPosition = five.camera.position
    const cameraDirection = five.camera.getWorldDirection(new Vector3())
    const startPoints = rulerData.lines.map(
      (v) => new Vector3(v.start[0], -v.start[1], -v.start[2]),
    )
    const endPoints = rulerData.lines.map((v) => new Vector3(v.end[0], -v.end[1], -v.end[2]))
    // 可以看到的角度最小的拐点
    const [visibleOrigin] = startPoints.concat(endPoints).sort((pointA, pointB) => {
      const angleA = pointA
        .clone()
        .setY(0)
        .sub(cameraPosition)
        .normalize()
        .angleTo(cameraDirection.clone().setY(0))
      const angleB = pointB
        .clone()
        .setY(0)
        .sub(cameraPosition)
        .normalize()
        .angleTo(cameraDirection.clone().setY(0))
      return angleA - angleB
    })

    const data = rulerData.lines.map((line) => {
      const start = line.start
      const end = line.end
      const { startLeft, startTop, distance, deg, visible, labelOffset, ruleLength } =
        getPositionAndVisible(
          new Vector3(start[0], -start[1], -start[2]),
          new Vector3(end[0], -end[1], -end[2]),
          visibleOrigin,
        )

      const children: any[] = []
      if (line.children && line.children?.length > 0) {
        line.children?.forEach((l) => {
          const start = l.start
          const end = l.end
          const { distance } = getPosition(
            new Vector3(start[0], -start[1], -start[2]),
            new Vector3(end[0], -end[1], -end[2]),
          )
          children.push({
            width: distance,
            state: l.state,
          })
        })
      }
      return {
        width: distance,
        left: startLeft,
        top: startTop,
        rotateDeg: deg,
        state: line.state,
        children,
        labelOffset,
        visible,
        labelElement: options.distanceText!(ruleLength),
      }
    })

    rulerItemProp = data
  }

  const nextFrameFreshRule = () => nextFrame(updatePanoRulerData)
  const throttleFreshRule = throttle(updatePanoRulerData, 80)

  onMount(() => {
    updatePanoRulerData()
    five.on('panoArrived', updatePanoRulerData)
    five.on('modeChange', updatePanoRulerData)
    five.on('cameraDirectionUpdate', nextFrameFreshRule)
    five.on('movingToPano', nextFrameFreshRule)
    five.on('mouseWheel', () => throttleFreshRule())
    five.on('pinchGesture', () => throttleFreshRule())
  })

  onDestroy(() => {
    five.off('panoArrived', updatePanoRulerData)
    five.off('modeChange', updatePanoRulerData)
    five.off('cameraDirectionUpdate', nextFrameFreshRule)
    five.off('movingToPano', nextFrameFreshRule)
    five.off('mouseWheel', () => throttleFreshRule())
    five.off('pinchGesture', () => throttleFreshRule())
  })
</script>

<div>
  {#each rulerItemProp as itemData}
    <RulerItem rulerItemProp="{itemData}" />
  {/each}
</div>

<style>
</style>
