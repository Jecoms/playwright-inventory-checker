import { test, expect } from '@playwright/test'

test('that something is out of stock', async ({ page }) => {
  await page.goto(
    'https://www.lego.com/en-us/product/lego-ideas-home-alone-21330'
  )
  const availability = page.locator(
    '[data-test="product-overview-availability"]'
  )
  await expect(availability).toHaveText('Temporarily out of stock')
})

test('if something is in stock', async ({ page }) => {
  await page.goto(
    'https://www.lego.com/en-us/product/everyone-is-awesome-40516'
  )
  const addToBagButton = page.locator(
    '[data-test="add-to-bag-sticky-container"]'
  )
  await expect(addToBagButton).toHaveText('Add to Bag')
})
