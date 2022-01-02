import { Page } from 'playwright'
import { takeScreenshot } from '../../../utils/screenshots'
import { Logger } from '../../../utils/types'

const addToBag = async (page: Page, requestId: string, logger: Logger) => {
  const addToBagButton = await page.locator(
    '[data-test="add-to-bag-sticky-container"]:has-text("Add to Bag")'
  )

  if (addToBagButton) {
    await addToBagButton.click()
    logger.info('Added to bag')
    await takeScreenshot(page, requestId, 'Added to bag')
    // [todo]: dog has caught car
  } else {
    logger.warn('Add to bag button not found')
  }

  // possibly return [status, error]
}

export { addToBag }
