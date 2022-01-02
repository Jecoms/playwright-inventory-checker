import { chromium, Browser, Page } from 'playwright'
import { RuntimeError, Session } from './types'

const emptySession: Session = { browser: undefined, page: undefined }

const session = async (): Promise<[Session, RuntimeError]> => {
  let browser: Browser
  let page: Page

  try {
    browser = await chromium.launch()
  } catch ({ message }) {
    return [emptySession, `Failed to launch browser: ${message}`]
  }

  try {
    page = await browser.newPage()
  } catch ({ message }) {
    return [emptySession, `Failed to open new page: ${message}`]
  }

  return [
    {
      browser,
      page
    },
    undefined
  ]
}

export { session }
