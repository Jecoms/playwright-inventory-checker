import { Page } from 'playwright'
import { takeScreenshot } from '../../../../utils/screenshots'
import { FeatureActionScript, Logger } from '../../../../utils/types'
import { clearAgeGate, clearCookieModal } from '../../utils/helpers'
import { isOutOfStock } from '../../utils/predicates'
import { addToBag } from '../../utils/addToBag'

const script: FeatureActionScript = async (
  page: Page,
  requestId: string,
  logger: Logger
) => {
  await page.goto(
    'https://www.lego.com/en-us/product/lego-ideas-home-alone-21330'
  )

  await clearAgeGate(page, logger)

  await clearCookieModal(page, logger)

  const outOfStock = await isOutOfStock(page)

  if (outOfStock) {
    logger.info('😢 The Home Alone set is still out of stock... 😢')

    await takeScreenshot(page, requestId, 'out-of-stock')
  } else {
    logger.info('🎉 The Home Alone set is in stock! 🎉')

    await takeScreenshot(page, requestId, 'in-stock')

    await addToBag(page, requestId, logger)
  }
}

export { script }
