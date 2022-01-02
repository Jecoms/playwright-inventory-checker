import { chromium, Browser, Page } from 'playwright'
import { v4 as generateUuid } from 'uuid'
import { now } from './time'
import { FeatureAction, Session, SessionError } from './types'

const sessionError = (requestId: string, error: string): SessionError => ({
  browser: undefined,
  page: undefined,
  requestId,
  error
})

const session = async (
  action: FeatureAction
): Promise<Session | SessionError> => {
  let requestId = `${action}/${generateUuid()}`
  let browser: Browser
  let page: Page

  try {
    browser = await chromium.launch({
      logger: {
        isEnabled: (name, _) => name === 'browser',
        log: (name, _, message, __) =>
          console.log(`|${action}|${now()}| [${name}]: ${message}`)
      }
    })
  } catch (browserLaunchError) {
    return sessionError(
      requestId,
      `Failed to launch browser: ${browserLaunchError}`
    )
  }

  try {
    page = await browser.newPage()
  } catch (pageError) {
    return sessionError(requestId, `Failed to open new page: ${pageError}`)
  }

  return {
    browser,
    page,
    requestId,
    error: undefined
  }
}

export { session }
