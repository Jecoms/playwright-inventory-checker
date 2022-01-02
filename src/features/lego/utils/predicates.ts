import { Page } from 'playwright'

const isOutOfStock = async (page: Page) => {
  return await page
    .locator(
      '[data-test="product-overview-availability"]:has-text("out of stock")'
    )
    .isVisible()
}

export { isOutOfStock }
