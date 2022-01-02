import { Page } from 'playwright'

const takeScreenshot = async (page: Page, requestId: string, name: string) => {
  const envBaseDir = process.env.SCREENSHOT_BASE_DIR || './screenshots'
  const screenshotDirWithRequestId = `${envBaseDir}/${requestId}`
  await page.screenshot({ path: `${screenshotDirWithRequestId}/${name}.png` })
}

export { takeScreenshot }
