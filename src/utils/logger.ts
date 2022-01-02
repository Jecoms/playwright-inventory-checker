import { Logger, RuntimeError } from './types'
import { now } from './time'

enum LogLevel {
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4
}

interface LoggerOptions {
  logLevel?: LogLevel
  hideRequestId?: boolean
  hideTimestamp?: boolean
}

const DEFAULT_OPTIONS: LoggerOptions = {
  logLevel: LogLevel.Debug,
  hideRequestId: false,
  hideTimestamp: false
}

const buildLogPrefix = (
  requestId: string,
  { hideRequestId, hideTimestamp }: LoggerOptions
): string => {
  const prefix = []

  if (!hideTimestamp) {
    prefix.push(`${now()}`)
  }

  if (!hideRequestId) {
    prefix.push(`${requestId}`)
  }

  if (prefix.length > 0) {
    prefix.unshift(' ')
    prefix.push('\n ↪')
  }

  return prefix.join('|')
}

const initLogger = (requestId: string, options?: LoggerOptions): Logger => {
  const logOptions = Object.assign({}, DEFAULT_OPTIONS, options)
  let logPrefix = buildLogPrefix(requestId, logOptions)

  const debug = (message: string) => {
    if (logOptions.logLevel > LogLevel.Debug) {
      return
    }

    console.debug(`${logPrefix} [debug] ${message}`)
  }

  const info = (message: string) => {
    if (logOptions.logLevel > LogLevel.Info) {
      return
    }

    console.info(`${logPrefix} [info] ${message}`)
  }

  const warn = (message: string) => {
    if (logOptions.logLevel > LogLevel.Warn) {
      return
    }

    console.warn(`${logPrefix} [warn] ${message}`)
  }

  const error = (message: RuntimeError) => {
    if (logOptions.logLevel > LogLevel.Error) {
      return
    }

    console.error(`${logPrefix} [error] ${message}`)
  }

  return {
    debug,
    info,
    warn,
    error
  }
}

export { initLogger, LogLevel, LoggerOptions }
