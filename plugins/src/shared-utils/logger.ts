/**
 * 输出格式化日志
 */

// 获取当前时间
const getTime = (): string => {
  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') //月份是从0开始的
  const day = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const min = date.getMinutes().toString().padStart(2, '0')
  const sec = date.getSeconds().toString().padStart(2, '0')
  const ms = date.getMilliseconds()

  return `[${year}-${month}-${day} ${hour}:${min}:${sec}.${ms}]`
}

export enum LOG_LEVEL {
  info = 'INFO',
  log = 'LOG',
  error = 'ERROR',
  warn = 'WARN',
}

// 输出日志
const echo = (logLevel: Partial<LOG_LEVEL>, args: any[] = []) => {
  args.unshift(`Realsee ${getTime()} <${logLevel}> `)
  switch (logLevel) {
    case LOG_LEVEL.info:
      return console.info(...args)
    case LOG_LEVEL.error:
      return console.error(...args)
    case LOG_LEVEL.warn:
      return console.warn(...args)
    default:
      return console.log(...args)
  }
}

const log = (...args: any[]) => echo(LOG_LEVEL.log, args)

const info = (...args: any[]) => echo(LOG_LEVEL.info, args)

const error = (...args: any[]) => echo(LOG_LEVEL.error, args)

const warn = (...args: any[]) => echo(LOG_LEVEL.warn, args)

const logger = {
  log,
  info,
  error,
  warn,
}

export default logger
