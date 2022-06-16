import type Line from '../Model/line'
import type { Five } from '@realsee/five'
import type { LineCompletelyJson, PolylineCompletelyJson } from '../typings/data'
import { Vector2, Vector3 } from 'three'
import isNDCPointInScreen from './isNDCPointInScreen'

export type DistanceItem = ReturnType<typeof creatDistanceItem>

export interface UserDistanceItem {
  element: Element
  highlight: () => void
  unHighlight: () => void
  update: (params: { line: LineCompletelyJson; polyline: PolylineCompletelyJson }) => void
}

export interface IDistanceItemProps {
  line: Line
  userDistanceItem?: UserDistanceItem
  clickCallback?: (item: DistanceItem) => unknown
}

function creatContentDom() {
  const contentDom = document.createElement('div')
  contentDom.setAttribute('style', `backdrop-filter: blur(4px);-webkit-backdrop-filter: blur(4px);`)
  contentDom.style.padding = '3px 6px'
  contentDom.style.lineHeight = '1'
  contentDom.style.textAlign = 'center'
  contentDom.style.transform = 'translate(-50%, -50%)'
  contentDom.style.borderRadius = '100px'
  contentDom.style.fontSize = '14px'
  contentDom.style.color = '#fff'
  contentDom.style.background = 'rgba(195,195,195,0.70)'
  contentDom.style.border = '0.5px solid rgba(255,255,255,0.6)'
  contentDom.style.pointerEvents = 'all'
  contentDom.style.cursor = 'pointer'

  return contentDom
}

function createContainerDom(line: Line) {
  const containerDom = document.createElement('div')
  containerDom.id = 'distance_' + line.id
  containerDom.classList.add('five-plugin-measure__distance')
  containerDom.style.opacity = '0'
  containerDom.style.position = 'absolute'
  containerDom.style.left = '0'
  containerDom.style.top = '0'
  containerDom.style.transform = 'translate3d(0, 0, 0)'
  containerDom.style.transformOrigin = 'left top'
  return containerDom
}

export function creatDistanceItem(props: IDistanceItemProps) {
  function handleClick() {
    // 线被选中时才高亮，外部手动触发高亮
    // highlight()
    props.clickCallback?.(distanceItem)
  }

  function highlight() {
    if (userDistanceItem) return userDistanceItem.highlight()
    contentDom.style.border = '0.5px solid #95AEFF'
    contentDom.style.background = 'linear-gradient(90deg, #95AEFF 0%, #6386FF 100%)'
  }

  function unHighlight() {
    if (userDistanceItem) return userDistanceItem.unHighlight()
    contentDom.style.border = '0.5px solid rgba(255,255,255,0.6)'
    contentDom.style.background = 'rgba(195,195,195,0.70)'
  }

  function update(five: Five) {
    const fiveElement = five.getElement()
    if (!fiveElement) return
    const screenWidth = fiveElement.clientWidth
    const screenHeight = fiveElement.clientHeight
    if (line.points.length < 2) return
    const [startPoint, endPoint] = line.points
    const ndcStartPosition = startPoint.position.clone().project(five.camera)
    const ndcEndPosition = endPoint.position.clone().project(five.camera)
    const ndcDomPosition = ndcStartPosition.clone().lerp(ndcEndPosition, 0.5)
    const screenStartPosition = new Vector2(ndcStartPosition.x * screenWidth, ndcStartPosition.y * screenHeight)
    const screenEndPosition = new Vector2(ndcEndPosition.x * screenWidth, ndcEndPosition.y * screenHeight)
    const visible = (() => {
      // 对于超过近平面和远平面的点，计算会有问题
      if (Math.abs(ndcStartPosition.z) > 1 || Math.abs(ndcEndPosition.z) > 1) return false
      if (!isNDCPointInScreen(ndcStartPosition) && !isNDCPointInScreen(ndcEndPosition)) return false
      if (!isNDCPointInScreen(ndcDomPosition)) return false
      if (screenStartPosition.distanceTo(screenEndPosition) < 20) return false
      return true
    })()
    if (visible === false) {
      containerDom.style.opacity = '0'
      containerDom.style.pointerEvents = 'none'
      return
    }

    // 更新 UI
    const left = ((ndcDomPosition.x + 1) / 2) * screenWidth
    const top = (-(ndcDomPosition.y - 1) / 2) * screenHeight
    const rad = Math.atan((screenStartPosition.y - screenEndPosition.y) / (screenStartPosition.x - screenEndPosition.x))
    const deg = -(rad * 180) / Math.PI
    containerDom.style.transform = `translate(${left}px, ${top}px) rotate(${deg}deg)`
    containerDom.style.opacity = '1'
    containerDom.style.pointerEvents = 'all'
    if (userDistanceItem) {
      userDistanceItem.update({ line: line.toCompletelyJson(), polyline: line.getPolyline().toCompletelyJson() })
    }
    const distanceString = startPoint.position.clone().distanceTo(endPoint.position).toFixed(2) + 'm'
    contentDom.innerText !== distanceString && (contentDom.innerText = distanceString)
  }

  function appendTo(container: Element) {
    container.appendChild(containerDom)
    containerDom.addEventListener('click', handleClick)
  }

  function remove() {
    contentDom.removeEventListener('click', handleClick)
    containerDom.remove()
  }

  const { line } = props
  const lineID = line.id
  const contentDom = creatContentDom()
  const containerDom = createContainerDom(line)
  const userDistanceItem = props.userDistanceItem
  const ndcPosition = new Vector3(0, 0, 0)
  const distanceItem = {
    lineID,
    ndcPosition,
    update,
    appendTo,
    remove,
    highlight: highlight,
    unHighlight: unHighlight,
  }
  userDistanceItem?.element ? containerDom.appendChild(userDistanceItem.element) : containerDom.appendChild(contentDom)

  return distanceItem
}
