import { Five } from '@realsee/five'
import * as TWEEN from '@tweenjs/tween.js'
import type { FivePlugin } from '@realsee/five'
import { tweenProgress } from '../shared-utils/animationFrame/tween'

import {
  CameraMovementPluginExportType,
  CameraMovementPluginParameterType,
  MoveArgs,
  MoveOpts,
  RotateArgs,
  RotateOpts,
  Rotation,
} from './typing'
import { formatLongitude, formatLatitude } from '../shared-utils/animationFrame/formatRad'
import { progressNumber } from '../shared-utils/animationFrame/calculateProgress'

type Tween = TWEEN.Tween<{ progress: number }> & { onDestroy: (p: any) => Tween; destroy: () => void }

const getLongitudeParams = (from: number, to: number, rotation: Rotation): { from: number; to: number } => {
  const PI = Math.PI
  const PI_2 = PI * 2
  from = formatLongitude(from)
  to = formatLongitude(to)
  // 逆时针旋转，初始值必须是较大的值
  if (rotation === Rotation.Anticlockwise && from < to) from += PI_2
  // 顺时针旋转，结束值必须是较大值
  if (rotation === Rotation.Clockwise && to < from) to += PI_2
  // Loop 旋转，找锐角旋转
  // 如果 to 比 from 大 180°，逆时针转
  // 如果 from 比 to 大 180°，顺时针转
  if (rotation === Rotation.Loop && to - from > PI) return getLongitudeParams(from, to, Rotation.Anticlockwise)
  if (rotation === Rotation.Loop && from - to > PI) return getLongitudeParams(from, to, Rotation.Clockwise)
  return { from, to }
}

/**
 * **运镜插件** 模拟类似于电影运镜效果。
 */
export const CameraMovementPlugin: FivePlugin<CameraMovementPluginParameterType, CameraMovementPluginExportType> = (
  five: Five,
) => {
  const state: { timeoutId?: NodeJS.Timeout; interruptCallback?: (flag: boolean) => void } = {}

  const move = async (args: Partial<MoveArgs>, duration: number, opts: MoveOpts = { preload: true }) => {
    if (state.interruptCallback) {
      state.interruptCallback(false)
    }

    if (opts.asyncStartCallback) {
      await opts.asyncStartCallback()
    }

    if (args.mode && args.mode !== five.currentMode) {
      await five.changeMode(args.mode)
    }

    if (opts.preload && args.panoIndex !== undefined && args.panoIndex !== five.panoIndex) {
      await five.preloadPano(args.panoIndex)
    }

    if (opts.asyncEndCallback) {
      await opts.asyncEndCallback()
    }

    if (
      args.panoIndex === undefined &&
      args.fov === undefined &&
      args.latitude === undefined &&
      args.longitude === undefined
    ) {
      return true
    }

    return await new Promise<boolean>((resolve, reject) => {
      const panoIndex = args.panoIndex !== undefined ? args.panoIndex : five.panoIndex
      if (panoIndex !== undefined) {
        five.moveToPano(
          panoIndex,
          Object.assign(
            {
              duration, // 移动耗时
              moveEndCallback: () => resolve(true), // 移动结束
              moveCancelCallback: () => reject(false), // 移动开始
            },
            args,
          ),
        )
      } else {
        reject(false)
      }
    })
  }

  const getAnimeParams = (args: RotateArgs) => {
    const currentFiveState = five.state
    // latitude
    const fromLatitude = formatLatitude(currentFiveState.latitude)
    const toLatitude = formatLatitude(args.latitude)
    // longitude
    const { from: fromLongitude, to: toLongitude } = getLongitudeParams(
      currentFiveState.longitude,
      args.longitude,
      args.rotation || Rotation.Loop,
    )
    // fov
    const fromFov = currentFiveState.fov
    const toFov = args.fov
    return {
      from: { latitude: fromLatitude, longitude: fromLongitude, fov: fromFov },
      to: { latitude: toLatitude, longitude: toLongitude, fov: toFov },
    }
  }

  const rotate = async (args: RotateArgs, duration: number, opts: RotateOpts = {}) => {
    if (state.interruptCallback) {
      state.interruptCallback(false)
    }

    if (opts.asyncStartCallback) {
      await opts.asyncStartCallback()
    }

    if (five.currentMode !== Five.Mode.Panorama) {
      await five.changeMode(Five.Mode.Panorama)
    }

    if (args.panoIndex !== undefined && args.panoIndex !== five.panoIndex) {
      if (opts.preload) await five.preloadPano(args.panoIndex)
      await new Promise((resolve, reject) => {
        if (!args.panoIndex) {
          resolve(true)
          return
        }
        five.moveToPano(args.panoIndex, {
          moveEndCallback: () => resolve(true), // 移动结束
          moveCancelCallback: () => reject(false), // 移动开始
        })
      })
    }

    if (opts.asyncEndCallback) {
      await opts.asyncEndCallback()
    }

    const { from, to } = getAnimeParams(args)
    return await new Promise<boolean>((resolve) => {
      const onUpdate = ({ progress }: { progress: number }) => {
        const state: Record<string, number> = {}
        state.longitude = progressNumber(from.longitude, to.longitude, progress)
        state.latitude = progressNumber(from.latitude, to.latitude, progress)
        state.fov = progressNumber(from.fov, to.fov, progress)
        five.setState(state, true)
      }

      const onComplete = () => {
        resolve(true)
      }

      const onDestroy = () => {
        resolve(false)
      }

      const animeDuration = args.rotateSpeed
        ? Math.ceil((Math.abs(to.longitude - from.longitude) / args.rotateSpeed) * 1000)
        : duration

      const tween = (tweenProgress(animeDuration, TWEEN.Easing.Linear.None) as Tween)
        .onUpdate(onUpdate)
        .onComplete(onComplete)
        .onDestroy(onDestroy)
      if (args.rotation === Rotation.Loop) {
        tween.repeat(Infinity).yoyo(true)
      }
      /**
       * 中断回调：可能会被其他动画中断。
       */
      state.interruptCallback = (flag = true) => {
        tween.destroy()
        state.interruptCallback = undefined
        if (state.timeoutId) {
          clearTimeout(state.timeoutId)
          state.timeoutId = undefined
        }
        resolve(flag)
      }
      state.timeoutId = setTimeout(() => {
        // 总时间到了之后强制结束，同时也是 Loop 模式的结束方式
        if (state.interruptCallback) state.interruptCallback(true)
      }, duration)
    })
  }

  return {
    move,
    rotate,
  }
}

export default CameraMovementPlugin
