// type UniqueSymbol = ReturnType<(a: string) => { readonly 0: unique symbol }[0]>;
//
// function createSymbol(description: string): UniqueSymbol {
//   // TODO 解决提示
//   // @ts-ignore
//   return typeof Symbol === "undefined" ? `$Symbol<${description}>$` : Symbol(description);
// }
//
// const EVENT_SYMBOL = createSymbol("$$LIVE_EVENT$$")

const EVENT_SYMBOL: unique symbol = Symbol("$$PAINT_BRUSH_EVENT$$")

export type EventMap = {
  [name: string]: (...args: any[]) => void | boolean,
}

function __generateEventIfNotExisted<T extends EventMap>(instance: any): {
  [Key in keyof T]: [callback: (...args: Parameters<T[Key]>) => ReturnType<T[Key]>, once: boolean][]
} {
  if (!instance[EVENT_SYMBOL]) {
    instance[EVENT_SYMBOL] = {}
  }
  return instance[EVENT_SYMBOL]
}

function __removeEventIfNotExisted(instance: any) {
  if (!instance[EVENT_SYMBOL]) {
    delete instance[EVENT_SYMBOL]
  }
}

/**
 * 监听者模式
 * @template T 预设的监听回调类型
 * @example
 * ```
 * new Subscribe<{
 * "foo": [arg1: number, arg2: string],
 * "bar": [arg: boolean],
 * }>()
 * ```
 */
class Subscribe<T extends EventMap>{
  /**
   * 判断是否注册了事件
   * @param name  事件类型
   */
  hasListener(name: keyof T): boolean {
    const events = __generateEventIfNotExisted<T>(this)
    return events && events[name] && events[name].length > 0
  }

  /**
   * 注册事件
   * @param  name    事件类型
   * @param  callback 事件回调函数
   * @param  once     是否只执行一次
   * @returns 解除事件
   * @template K 预设的监听事件名称
   * @template C 回调函数函数上下文
   */
  on<K extends keyof T>(
    name: K,
    callback: (...args: Parameters<T[K]>) => ReturnType<T[K]>,
    once?: boolean
  ): () => void {
    const events = __generateEventIfNotExisted<T>(this)
    if (!events[name]) events[name] = []
    events[name].push([callback as any, once || false])
    return () => this.off(name, callback)
  }

  /**
   * 注册事件(是否只执行一次)
   * @param  name     事件类型
   * @param  callback 事件回调函数
   * @returns 解除事件
   * @template K 预设的监听事件名称
   * @template C 回调函数函数上下文
   */
  once<K extends keyof T>(
    name: K,
    callback: (...args: Parameters<T[K]>) => ReturnType<T[K]>,
  ): () => void {
    return this.on(name, callback, true)
  }

  /**
   * 解除事件
   *
   * 如果 name 不传的话解除对应所有事件
   * 如果 name, callback 不传的话解除所有name的所有事件
   * @param  name     事件类型
   * @param  callback 事件回调函数
   * @template K 预设的监听事件名称
   */
  off<K extends keyof T>(
    name?: K,
    callback?: (...args: Parameters<T[K]>) => ReturnType<T[K]>
  ): void {
    if (name === undefined) {
      __removeEventIfNotExisted(this)
      return
    }
    const events = __generateEventIfNotExisted<T>(this)
    if (!events[name]) events[name] = []
    if (callback === undefined) {
      events[name].length = 0
      return
    }
    let index = 0
    for (; index < events[name].length; index++) {
      if (events[name][index][0] === callback) break
    }
    if (index < events[name].length) {
      events[name].splice(index, 1)
    }
  }

  /**
   * 触发事件
   * @param  name  事件类型
   * @param  data  触发事件的数据
   * @returns canceled 是否被触发取消
   * @template K 预设的监听事件名称
   */
  emit<K extends keyof T>(name: K, ...data: Parameters<T[K]>): boolean {
    let canceled = false
    const events = __generateEventIfNotExisted<T>(this)
    const event = events[name] || []
    for (let one of event.slice()) {
      const [callback, once = false] = one
      const result = callback(...data)
      if (once) this.off(name, callback)
      if (result === false) canceled = true
    }
    return canceled
  }
}

export namespace SubscribeMixinType {
  export interface hasListener<T extends EventMap> {
    (name: keyof T): boolean
  }
  export interface on<T extends EventMap> {
    <K extends keyof T>(
      name: K,
      callback: (...args: Parameters<T[K]>) => ReturnType<T[K]>,
      once?: boolean
    ): () => void
  }
  export interface once<T extends EventMap> {
    <K extends keyof T>(
      name: K,
      callback: (...args: Parameters<T[K]>) => ReturnType<T[K]>,
    ): () => void
  }
  export interface off<T extends EventMap> {
    <K extends keyof T>(names?: K | K[], callback?: (...args: any[]) => any): void
  }
  export interface emit<T extends EventMap> {
    <K extends keyof T>(name: K, ...data: Parameters<T[K]>): boolean
  }
}

export { Subscribe }
