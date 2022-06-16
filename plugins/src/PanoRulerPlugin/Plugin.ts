import type { FivePlugin } from '@realsee/five'
import type { RoomInfo, RoomRules } from './typings'
import { Five } from '@realsee/five'
import { Raycaster, Vector3 } from 'three'
import { intersectionOfLine } from '../shared-utils/math/planimetry'
import { nextFrame } from '../shared-utils/nextFrame'
import throttle from '../shared-utils/throttle'
import PanoRulerStyle from './style'

export interface PanoRulerPluginOptions {
    distanceText?: (distance: number) => string
    className?: string
}

interface PanoRulerPluginPluginState {
    enable: boolean
    loaded: boolean
    options: PanoRulerPluginOptions
}

export interface PanoRulerPluginParameterType {
    roomInfo?: RoomInfo
    roomRules?: RoomRules
    options?: PanoRulerPluginOptions
}

export interface PanoRulerPluginExportType {
    enable: () => void
    disable: () => void
    load: (roomInfo?: RoomInfo, roomRules?: RoomRules, options?: PanoRulerPluginOptions) => Promise<boolean>
    state: PanoRulerPluginPluginState
}

const getDistance = (p1: { x: number; z: number }, p2: { x: number; z: number }) => {
    return Math.sqrt(Math.pow(p1.z - p2.z, 2) + Math.pow(p1.x - p2.x, 2))
}

const getRoomHeightInfo = (roomInfo: RoomInfo, five: Five) => {
    const roomHeightInfo: Record<string,
        { __roof: (number | null)[]; __floor: number[]; floor?: number | null; roof?: number | null }> = {}
    const raycaster = new Raycaster()
    const work = five.work
    if (!work) return roomHeightInfo

    const observers = roomInfo.observers

    work.observers.forEach((observer, index) => {
        const { standingPosition: position } = observer
        const point = new Vector3(position.x, position.y, position.z)
        raycaster.set(point, new Vector3(0, 1, 0))
        const [intersection] = five.model.intersectRaycaster(raycaster)
        // 虚景 VR 没有天花板碰撞射线无相交，默认固定层高2.7m
        const verticalY = intersection ? intersection.point.y : 2.7
        const id = observers[index]
        if (!id) return roomHeightInfo

        const observerRoomName = roomInfo.rooms[id].name

        if (roomHeightInfo[observerRoomName] === undefined) {
            roomHeightInfo[observerRoomName] = {
                __roof: [verticalY],
                __floor: [point.y],
            }
        } else {
            roomHeightInfo[observerRoomName].__roof.push(verticalY)
            roomHeightInfo[observerRoomName].__floor.push(point.y)
        }
    })

    // 地板高度求中位数,屋顶高度取最高
    for (const roomName in roomHeightInfo) {
        const room = roomHeightInfo[roomName]
        room.__roof.sort()
        room.__floor.sort()
        room.floor = room.__floor[~~(room.__floor.length / 2)]
        room.roof = room.__roof[room.__roof.length - 1]
    }
    return roomHeightInfo
}

interface Origin extends Vector3 {
    observers: number[]
}

interface Rule {
    [key: string]: {
        origins: Origin[]
        rules: {
            vertical: boolean
            rule: Origin[]
            $element: HTMLDivElement
        }[]
    }
}

/**
 * 全景标尺插件
 */
export const PanoRulerPlugin: FivePlugin<PanoRulerPluginParameterType, PanoRulerPluginExportType> = (
    five: Five,
    params,
) => {
    const state: PanoRulerPluginPluginState = {
        enable: false,
        loaded: false,
        options: params.options || {
            distanceText: (distance) => `${distance.toFixed(1)}m`,
        },
    }

    const tpl = (name: string, distance: number) => {
        const domStr = `
      <div class="PanoRulerPlugin-rule-line">
        <em></em>
        <div class="PanoRulerPlugin-rule-label">
          <div class="PanoRulerPlugin-rule-label-name">${state.options.distanceText!(distance)}</div>
        </div>
      </div>
    `
        const res = document.createElement('div')
        res.setAttribute('class', 'PanoRulerPlugin-rule')
        res.setAttribute('data-name', name)
        res.setAttribute('style', 'display: none')
        res.innerHTML = domStr
        return res
    }

    const $rule = document.createElement('div')
    $rule.setAttribute(
        'style',
        `position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;`,
    )

    // 添加标尺样式
    const style = document.createElement('div')
    style.innerHTML = PanoRulerStyle
    $rule.appendChild(style)

    const __rule: Rule = {}

    const _load = (roomInfo: RoomInfo, roomRules: RoomRules) => {
        // if (state.loaded) {
        //     throw new Error('标尺被重复初始化！')
        // }
        const roomHeightInfo = getRoomHeightInfo(roomInfo, five)
        const work = five.work
        if (!work) return false
        for (const obKey in roomRules) {
            const points = roomRules[obKey]
            const { standingPosition: defaultPosition } = work.observers[0]
            const roomPoints = points.map(({ x, z, observers }) => {
                const pointRoomName = observers.length > 0 ? roomInfo.rooms[roomInfo.observers[observers[0]]].name : ''
                const medianFloorHeight = roomHeightInfo[pointRoomName] ? roomHeightInfo[pointRoomName].floor : null
                let minDistance = Infinity
                let nearestPoint = {
                    index: 0,
                    x: defaultPosition.x,
                    y: defaultPosition.y,
                    z: defaultPosition.z,
                }

                observers.forEach((index) => {
                    if (!work.observers[index]) return
                    const { standingPosition: position } = work.observers[index]
                    const observerPoint = {
                        index,
                        x: position.x,
                        y: position.y,
                        z: position.z,
                    }
                    const distance = getDistance({ x, z }, observerPoint)
                    if (medianFloorHeight) {
                        // 取最近点时排除高度与房间平均高度差大于0.3米的点
                        if (distance < minDistance && Math.abs(observerPoint.y - medianFloorHeight) < 0.3) {
                            minDistance = distance
                            nearestPoint = observerPoint
                        }
                    } else {
                        if (distance < minDistance) {
                            minDistance = distance
                            nearestPoint = observerPoint
                        }
                    }
                })
                const _origin = new Vector3(x, nearestPoint.y, z)
                Object.assign(_origin, { observers })

                const verticalY = roomHeightInfo[pointRoomName] ? roomHeightInfo[pointRoomName].roof : null
                const _vertical = !verticalY ? null : new Vector3(x, verticalY, z)
                if (_vertical) Object.assign(_vertical, { observers })

                const origin = _origin as Origin
                const vertical = _vertical as Origin
                return { origin, vertical }
            })

            __rule[obKey] = {
                origins: roomPoints.map((roomPoint) => roomPoint.origin) as Origin[],
                rules: [],
            }

            for (const { origin, vertical } of roomPoints) {
                if (!vertical) continue

                const $element = tpl(obKey, origin.distanceTo(vertical))
                $rule.append($element)
                __rule[obKey].rules.push({ vertical: true, rule: [origin, vertical], $element })
            }

            for (let index = 0; index < roomPoints.length; index++) {
                let nextIndex = index + 1
                if (nextIndex >= roomPoints.length) nextIndex = 0

                const { origin } = roomPoints[index]
                const { origin: next } = roomPoints[nextIndex]

                const $element = tpl(obKey, origin.distanceTo(next))
                $rule.append($element)
                __rule[obKey].rules.push({ vertical: false, rule: [origin, next], $element })
            }
        }

        state.loaded = true

        freshRule()
        return true
    }

    const load = async (_roomInfo?: RoomInfo, _roomRules?: RoomRules, options?: PanoRulerPluginOptions) => {
        const roomInfo = _roomInfo || params.roomInfo
        const roomRules = _roomRules || params.roomRules

        if (!roomInfo || !roomRules) {
            throw new Error('标尺数据依赖不齐全！')
        }

        state.loaded = false

        state.options = Object.assign({}, state.options, options || {})
        if (five.model.loaded) {
            return _load(roomInfo, roomRules)
        } else {
            return await new Promise<boolean>((resolve) =>
                five.once('modelLoaded', () => resolve(_load(roomInfo!, roomRules!))),
            )
        }
    }

    if (params.roomInfo && params.roomRules) {
        load(params.roomInfo, params.roomRules)
    }

    const getRuleScreenIntr = (
        startPoint: { x: number; y: number },
        endPoint: { x: number; y: number },
        canvasWidth: number,
        canvasHeight: number,
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
        const intr = []
        for (let i = 0; i < screenLines.length; i++) {
            const result = intersectionOfLine([startPoint, endPoint], [screenLines[i][0], screenLines[i][1]], true)
            if (result) intr.push(result)
        }
        if (intr.length === 0) return false
        else {
            return intr
        }
    }

    const freshRule = () => {
        const element = five.getElement()?.parentElement
        if (!element) return
        if (!state.loaded) return
        if (Object.keys(__rule).length <= 0) return
        const { panoIndex, camera, currentMode } = five

        if (panoIndex === undefined) return

        let name
        for (const _name in __rule) {
            if (_name.split(',').indexOf(panoIndex.toString()) >= 0) name = _name
        }
        if (!name) return

        const cameraPosition = camera.position
        const cameraDirection = camera.getWorldDirection(new Vector3())

        const width = element.clientWidth
        const height = element.clientHeight

        // 非全景模式下隐藏所有标尺
        if (currentMode !== Five.Mode.Panorama) {
            for (const _name in __rule) {
                for (const { $element } of __rule[_name].rules) {
                    $element.style.display = 'none'
                }
            }

            return
        }

        // 隐藏非当前点位的标尺
        for (const _name in __rule) {
            for (const { $element } of __rule[_name].rules) {
                $element.style.display = _name === name ? 'block' : 'none'
            }
        }

        const verticalLines = []
        // 可以看到的角度最小的拐点
        const [visibleOrigin] = __rule[name].origins
            .slice()
            .filter((point) => point.observers.indexOf(panoIndex) >= 0)
            .sort((pointA, pointB) => {
                const angleA = pointA.clone().setY(0).sub(cameraPosition).normalize().angleTo(cameraDirection.clone().setY(0))
                const angleB = pointB.clone().setY(0).sub(cameraPosition).normalize().angleTo(cameraDirection.clone().setY(0))

                return angleA - angleB
            })

        const shownNotVerticalRules = []
        for (const { rule, vertical, $element } of __rule[name].rules) {
            const [start, end] = rule
            const $line = $element.querySelector<HTMLDivElement>('.PanoRulerPlugin-rule-line')

            if (!$line) return
            if (!visibleOrigin) {
                $element.style.display = 'none'
                continue
            }
            if (start !== visibleOrigin && end !== visibleOrigin) {
                $element.style.display = 'none'
                continue
            }

            if (start.distanceTo(end) < 0.5) {
                $element.style.display = 'none'
                continue
            }

            if (start.observers.indexOf(panoIndex) === -1 || end.observers.indexOf(panoIndex) === -1) {
                $element.style.display = 'none'

                continue
            }

            const startAngle = start.clone().sub(cameraPosition).normalize().angleTo(cameraDirection)
            if (startAngle > Math.PI / 2) {
                $element.style.display = 'none'
                continue
            }

            const endAngle = end.clone().sub(cameraPosition).normalize().angleTo(cameraDirection)
            if (endAngle > Math.PI / 2) {
                $element.style.display = 'none'
                continue
            }

            const ruleLength = start.distanceTo(end)
            const midPoint = end.clone().sub(end.clone().sub(start).divide(new Vector3(2, 2, 2)))
            const disFromCameraToMid = midPoint.distanceTo(cameraPosition)
            if (disFromCameraToMid / ruleLength > 8) {
                $element.style.display = 'none'

                continue
            }

            if (!vertical) shownNotVerticalRules.push(rule)
            if (vertical) verticalLines.push({ $element, startAngle })

            const mouseStart = start.clone().project(camera)
            const startLeft = ((mouseStart.x + 1) / 2) * width
            const startTop = ((-mouseStart.y + 1) / 2) * height

            const mouseEnd = end.clone().project(camera)
            const endLeft = ((mouseEnd.x + 1) / 2) * width
            const endTop = ((-mouseEnd.y + 1) / 2) * height

            const distance = Math.sqrt(Math.pow(endLeft - startLeft, 2) + Math.pow(endTop - startTop, 2))
            let visibleLength = distance
            let labelOffset = 50
            const intr = getRuleScreenIntr({ x: ~~startLeft, y: ~~startTop }, {
                x: ~~endLeft,
                y: ~~endTop
            }, width, height)
            if (intr && intr.length === 1) {
                if (visibleOrigin === start) {
                    visibleLength = Math.sqrt(Math.pow(intr[0].x - startLeft, 2) + Math.pow(intr[0].y - startTop, 2))
                    labelOffset = (visibleLength / distance) * 50
                } else if (visibleOrigin === end) {
                    visibleLength = Math.sqrt(Math.pow(intr[0].x - endLeft, 2) + Math.pow(intr[0].y - endTop, 2))
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
            const rad = Math.PI / 2 - Math.atan2(endLeft - startLeft, startTop - endTop)

            const deg = (rad / Math.PI) * 180

            const $label = $line.querySelector('.PanoRulerPlugin-rule-label') as HTMLDivElement

            // 线的长度小于标签时或者标签与线两端点重合时隐藏,
            const labelWidth = $label.children[0].clientWidth
            if (
                labelWidth >= distance ||
                labelWidth / 2 >= (labelOffset / 100) * distance ||
                labelWidth / 2 >= (1 - labelOffset / 100) * distance
            ) {
                $line.style.display = 'none'
            } else {
                $line.style.display = 'block'
                $line.style.width = distance + 'px'
                $line.style.left = startLeft + 'px'
                $line.style.top = startTop + 'px'
                $line.style.transform = `rotate(${-deg}deg)`

                $label.style.left = `${labelOffset}%`
            }
        }
    }

    const nextFrameFreshRule = () => nextFrame(freshRule)
    const throttleFreshRule = throttle(freshRule, 80)

    const enable = () => {
        if (!state.loaded) return false
        if (state.enable) return true
        $rule.setAttribute('class', 'PanoRulerPlugin' + (state.options.className ? ' ' + state.options.className : ''))
        five.getElement()?.parentElement?.append($rule)
        freshRule()
        five.on('panoArrived', freshRule)
        five.on('modeChange', freshRule)
        five.on('cameraDirectionUpdate', nextFrameFreshRule)
        five.on('movingToPano', nextFrameFreshRule)
        five.on('mouseWheel', throttleFreshRule)
        five.on('pinchGesture', throttleFreshRule)
        state.enable = true
        return true
    }

    const disable = () => {
        if (!state.enable) return true
        five.off('panoArrived', freshRule)
        five.off('modeChange', freshRule)
        five.off('cameraDirectionUpdate', nextFrameFreshRule)
        five.off('movingToPano', nextFrameFreshRule)
        five.off('mouseWheel', throttleFreshRule)
        five.off('pinchGesture', throttleFreshRule)

        if ($rule) {
            $rule.remove()
        }

        state.enable = false
        return true
    }

    return {
        enable,
        disable,
        load,
        state,
    }
}

export const panoRulerPluginServerParams = {
    name: 'PanoRulerPlugin',
    version: 0,
}
export default PanoRulerPlugin
