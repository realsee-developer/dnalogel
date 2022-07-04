export interface PaintBrushConfigs {
  container?: HTMLDivElement
  currentColor: string
  DPR?: number,
  onClickClose?: () => void,
  onClickUndo?: () => void,
  onUndoText?: string
  onExitText?: string
}

export type PaintBrushEventMap = {
  readyChange: (ready: boolean) => void,
  stateChange: (state: PaintBrushAction, userAction: boolean) => void,
}


export interface PaintBrushState {
  move: {x: number, y: number}
  line: {x: number, y: number}[]
  color: string
  uuid: string
  duration: number // 单次笔迹时长超过2000ms不加动画
}


export enum PaintBrushTypeEnum {
  Drawline='Drawline',
  Undo='Undo',
  Exit='Exit',
}

export interface PaintBrushAction {
  uuid: string
  /**
   * 类型枚举
   */
  type: PaintBrushTypeEnum
  /**
   * 颜色色值
   */
  color: string
  /**
   * 是否就绪
   */
  ready: boolean
  /**
   * 状态值
   */
  state?: PaintBrushState
  /**
   * 时间戳：当作 uuid 使用
   */
  timestamp?: number
  /**
   * 是否是结尾数据
   */
  end?: boolean
}
