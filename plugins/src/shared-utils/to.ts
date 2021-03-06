/**
 * 传入一个 Promise
 * 无异常，返回 [null, data]
 * 有异常，则返回 [Error, undefined]
 * 用于替代 try&catch 处理 await 异常的方案
 */
export async function to<T>(promise: Promise<T>): Promise<[null, T] | [Error, null]> {
  try {
    const data = await promise
    return [null, data]
  } catch (error) {
    if (error instanceof Error) return [error, null]
    return [new Error(''), null]
  }
}

export default to
