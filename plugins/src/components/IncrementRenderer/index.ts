import { Work } from '@realsee/five'

export interface IncrementRendererMeta extends Record<any, any> {
  status: RENDER_STATUS | string
}

/**
 * 增量渲染器的配置
 */
export interface IncrementRendererOptions {
  // 初始meta数据
  initialMeta?: IncrementRendererMeta

  // 初始work数据
  initialWork?: any

  // 轮询时间间隔，单位毫秒，默认1000ms
  pollingInterval?: number

  // 当 getMeta 或者 getWork 获取异常后重试的次数
  retryCount?: number

  // 获取meta数据的接口
  getMeta: () => Promise<IncrementRendererMeta>

  // 获取work数据的接口
  getWork: () => Promise<any>

  // 当work数据发生变更
  onWorkChange: (work: Work) => void

  // 当渲染完成
  onRenderDone: (work: Work) => void

  // 渲染状态变化
  onStatusChange?: (status: RENDER_STATUS | string) => void

  // 当发生异常时的回调
  onError?: (error: Error) => void
}

// 默认轮询间隔
const __DEFAULT_POLLING_INTERVAL__ = 1000

// 渲染状态
export const enum RENDER_STATUS {
  init = '',
  ing = 'RENDER_ING',
  part = 'RENDER_PART_DONE',
  done = 'RENDER_DONE',
  failed = 'RENDER_FAIL',
}

/**
 * 增量渲染器
 */
export class IncrementRenderer {
  // getMeta调用失败重试次数
  private _getMetaTryCount = 0

  // getWork调用失败重试次数
  private _getWorkTryCount = 0

  // 当前渲染状态
  private _currentRenderStatus: RENDER_STATUS | string = RENDER_STATUS.init

  // 当前执行轮询的异步句柄
  private _animationFrameId: number | undefined

  private _options: IncrementRendererOptions

  public constructor(opt: IncrementRendererOptions) {
    // 检测必传参数
    if (typeof opt.getMeta !== 'function')
      throw new Error('getMeta is required and it can be called!')

    if (typeof opt.getWork !== 'function')
      throw new Error('getWork is required and it can be called!')

    if (typeof opt.onWorkChange !== 'function')
      throw new Error('onWorkChange is required and it can be called!')

    if (typeof opt.onRenderDone !== 'function')
      throw new Error('onRenderDone is required and it can be called!')

    this._options = Object.assign(opt)

    if (typeof this._options.pollingInterval !== 'number') {
      this._options.pollingInterval = __DEFAULT_POLLING_INTERVAL__
    }

    this._start()
  }

  /**
   * 销毁掉
   */
  public dispose = () => {
    this._stop()
  }

  // 设置当前状态
  private _setCurrentRenderStatus(status: RENDER_STATUS | string) {
    // 发生变更时进行处理
    if (this._currentRenderStatus !== status) {
      this._currentRenderStatus = status
      try {
        this._options.onStatusChange?.(this._currentRenderStatus)
      } catch (e) {
        this._handleError(e as Error)
      }
    }
  }

  /**
   * 启动检查
   */
  private _start = async () => {
    this._clearAnimationFrameIfNeed()
    // 初始检查
    if (this._options.initialMeta && this._options.initialMeta.status === RENDER_STATUS.done) {
      // 已经完成的就完成了
      const work = this._options.initialWork || (await this._getWork())
      this._handleRenderDone(work)
    } else {
      // 没完成的去轮询
      if (this._options.initialWork) {
        // 如果有初始work就先给塞回去尽快进行渲染
        this._handleWorkChange(this._options.initialWork)
      }
      this._animationFrameId = requestAnimationFrame(this._polling)
    }
  }

  /**
   * 停止检查
   */
  private _stop = () => {
    this._clearAnimationFrameIfNeed()
    this._getMetaTryCount = 0
    this._getWorkTryCount = 0
  }

  /**
   * 进行轮询
   */
  private _polling = async () => {
    const meta = await this._getMeta()
    this._setCurrentRenderStatus(meta?.status || RENDER_STATUS.init)

    // part_done 和 done 的时候给查一下work数据
    if (meta?.status === RENDER_STATUS.part || meta?.status === RENDER_STATUS.done) {
      const work = await this._getWork()
      if (meta?.status === RENDER_STATUS.part) {
        // part_done 进行workChange
        this._handleWorkChange(work)
      }

      if (meta?.status === RENDER_STATUS.done) {
        // done 进行done操作
        this._handleRenderDone(work)
      }
    }

    switch (meta?.status) {
      case RENDER_STATUS.done: {
        // 完成即停止
        this._stop()
        break
      }
      case RENDER_STATUS.failed: {
        // 渲染失败
        this._stop()
        this._handleError(
          new Error('IncrementRenderer stop because of meta status is render fail!'),
        )
        break
      }
      default: {
        // 暂停一会儿，继续轮询
        if (this._options.pollingInterval) {
          await new Promise((resolve) => setTimeout(resolve, this._options.pollingInterval))
        }
        this._animationFrameId = requestAnimationFrame(this._polling)
        break
      }
    }
  }

  /**
   * 处理渲染完成
   */
  private _handleRenderDone = (finalWork: any) => {
    try {
      this._currentRenderStatus = RENDER_STATUS.done
      this._options.onRenderDone(this._polyfillWork(finalWork))
    } catch (e) {
      this._handleError(e as Error)
    }
  }

  private _handleWorkChange = (work: any) => {
    try {
      this._options.onWorkChange(this._polyfillWork(work))
    } catch (e) {
      this._handleError(e as Error)
    }
  }

  /**
   * 处理异常
   * @param e 发生的异常对象
   */
  private _handleError = (e: Error) => {
    if (typeof this._options.onError === 'function') {
      this._options.onError?.(e)
    } else {
      throw e
    }
  }

  /**
   * 清理轮询句柄
   */
  private _clearAnimationFrameIfNeed = () => {
    if (this._animationFrameId) {
      cancelAnimationFrame(this._animationFrameId)
      this._animationFrameId = undefined
    }
  }

  /**
   * 核心：给work数据打补丁
   * 注意：修改work数据会导致数据签名失效，five拒绝渲染
   */
  private _polyfillWork = (originWork: any) => {
    const observers = originWork?.observers || []
    const panorama = originWork?.panorama || []
    if (panorama.count !== observers.length) {
      // 未完全渲染
      observers.forEach((_observer: any, index: number) => {
        if (!originWork.panorama.list[index]) {
          originWork.panorama.list[index] = {
            loadable: true,
            active: false,
            disable: false,
            back: '',
            down: '',
            front: '',
            left: '',
            right: '',
            up: '',
          }
        }
      })
      panorama.count = observers.length
    }
    return originWork
  }

  /**
   * 获取meta数据
   * @returns
   */
  private _getMeta = async (): Promise<IncrementRendererMeta | undefined> => {
    try {
      this._getMetaTryCount = 0
      return await this._options.getMeta()
    } catch (e) {
      this._handleError(e as Error)
      if (
        typeof this._options.retryCount === 'number' &&
        this._getMetaTryCount > this._options.retryCount
      ) {
        this._handleError(new Error('number of getMeta retries exceeded'))
      } else {
        this._getMetaTryCount = this._getMetaTryCount + 1
        return await this._getMeta()
      }
    }
  }

  /**
   * 获取work数据
   * @returns
   */
  private _getWork = async (): Promise<any | undefined> => {
    try {
      this._getWorkTryCount = 0
      return await this._options.getWork()
    } catch (e) {
      this._handleError(e as Error)
      if (
        typeof this._options.retryCount === 'number' &&
        this._getWorkTryCount > this._options.retryCount
      ) {
        this._handleError(new Error('number of getMeta retries exceeded'))
      } else {
        this._getWorkTryCount = this._getWorkTryCount + 1
        return await this._getWork()
      }
    }
  }
}
