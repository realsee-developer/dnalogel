export const enum FloorplanErrorType {
  /** 意料之外的错误 */
  UnknownError = 'UnknownError',
  /** 数据未加载 */
  DataNotLoaded = 'DataNotLoaded',
  /** 展示过程被隐藏打断 */
  BreakOffByHide = 'BreakOffByHide',
  /** 展示过程中插件被禁用 */
  BreakOffByDisable = 'BreakOffByDisable',
  /** 模型未加载完成 */
  ModelNotLoaded = 'ModelNotLoaded',
  /** Five changeMode 行为不符合预期 */
  ChangeModeError = 'ChangeModeError',
  /** Five updateCamera 行为不符合预期 */
  UpdateCameraError = 'UpdateCameraError',
}

/** 户型图展示 & 模型消失的默认时间 */
export const SHOW_ANIME_DURATION = 500
/** Five camera 默认 fov */
export const FIVE_CAMERA_DEFAULT_FOV = 80
/** 展示户型图时，默认模型的透明度 */
export const DEFAULT_SHOW_MODEL_OPACITY = 0.01
