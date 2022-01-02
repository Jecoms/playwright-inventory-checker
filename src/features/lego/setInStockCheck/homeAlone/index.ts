import { Page } from 'playwright'
import { takeScreenshot } from '../../../../utils/screenshots'
import { clearAgeGate, clearCookieModal } from '../../utils/helpers'
import { isOutOfStock } from '../../utils/predicates'
import { handleInStock } from './handleInStock'

const script = async (page: Page, requestId: string) => {
  await page.goto(
    'https://www.lego.com/en-us/product/lego-ideas-home-alone-21330'
  )

  await clearAgeGate(page)

  await clearCookieModal(page)

  const outOfStock = await isOutOfStock(page)

  if (outOfStock) {
    console.log('😢 The Home Alone set is still out of stock... 😢')

    await takeScreenshot(page, requestId, 'out-of-stock')
  } else {
    console.log('🎉 The Home Alone set is in stock! 🎉')

    await takeScreenshot(page, requestId, 'in-stock')

    await handleInStock(page)
  }
}

export { script }
