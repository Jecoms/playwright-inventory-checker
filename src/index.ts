import { getActionScript } from './utils/getActionScript'
import { session } from './utils/session'
import { readArgs } from './utils/argsParser'
import { takeScreenshot } from './utils/screenshots'
;(async () => {
  const { action, error: argError } = readArgs()

  if (argError) {
    console.error(argError)
    process.exit(1)
  }

  const { script, error: actionError } = getActionScript(action)

  if (actionError) {
    console.error(actionError)
    process.exit(1)
  }

  const { browser, page, requestId } = await session(action)

  try {
    await script(page, requestId)
  } catch (scriptError) {
    console.error(scriptError)
    await takeScreenshot(page, requestId, 'unhandled-error')
    process.exit(1)
  } finally {
    await browser.close()
    process.exit(0)
  }
})()
