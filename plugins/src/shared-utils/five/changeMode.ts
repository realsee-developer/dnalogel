import type { Five, State } from '@realsee/five'
import nearlyEqual from '../nearlyEqual'

/** 等待 five changeMode 结束
 * @description Promise 的状态只代表 mode 与预期是否一致，不保证参数的一致性
 */
export default async function changeMode(five: Five, changeModeParams: Parameters<Five['changeMode']>) {
  await new Promise<void>((resolve, reject) => {
    // 虽然 changeMode 是异步函数，但不代表异步流程结束代表切换 Mode 动画结束
    five.changeMode(...changeModeParams).catch((error) => reject(error))
    five.once('initAnimationEnded', () => {
      const fiveCurrentState = five.getCurrentState()
      const correctMode = changeModeParams[0]
      if (fiveCurrentState.mode !== correctMode) reject(new Error('mode 与预期不符'))
      /** 检测当前的 current pose 和传入的 pose 是否一致 */
      const checkPose = () => {
        const correctPose = changeModeParams[1]
        if (!correctPose) return true
        return Object.keys(correctPose).every((key) => {
          type StateKey = keyof State
          type ChangeModeStateKey = keyof Partial<Omit<State, 'mode'>>
          const fivePoseItem = fiveCurrentState[key as StateKey]
          if (fivePoseItem === undefined) return true
          const correctPoseItem = correctPose[key as ChangeModeStateKey]
          if (typeof fivePoseItem === 'number' && typeof correctPoseItem === 'number') {
            return nearlyEqual(fivePoseItem, correctPoseItem, 2)
          }
          return fivePoseItem === correctPoseItem
        })
      }
      const checkPoseResult = checkPose()
      if (!checkPoseResult) reject(new Error('five pose 与预期不符'))
      resolve()
    })
  })
}
