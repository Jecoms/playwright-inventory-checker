import { v4 as generateUuid } from 'uuid'
import { getActionScript } from './utils/getActionScript'
import { session } from './utils/session'
import { readArgs } from './utils/argsParser'
import { takeScreenshot } from './utils/screenshots'
import { initLogger, LogLevel } from './utils/logger'
;(async () => {
  const [action, argError] = readArgs()
  const requestId = `${action}/${generateUuid()}`
  const logger = initLogger(requestId, {
    logLevel: LogLevel.Info,
    hideTimestamp: true
  })

  if (argError) {
    logger.error(argError)
    process.exit(1)
  }

  const [script, actionError] = getActionScript(action, logger)

  if (actionError) {
    logger.error(actionError)
    process.exit(1)
  }

  const [{ browser, page }, sessionError] = await session()

  if (sessionError) {
    logger.error(sessionError)
    process.exit(1)
  }

  try {
    await script(page, requestId, logger)
  } catch (scriptError) {
    logger.error(scriptError)
    await takeScreenshot(page, requestId, 'unhandled-error')
    process.exit(1)
  } finally {
    await browser.close()
    process.exit(0)
  }
})()
