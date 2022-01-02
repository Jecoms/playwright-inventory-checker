import { Page } from 'playwright'

const clearAgeGate = async (page: Page) => {
  const ageGateVisible = await page.locator('[data-test="age-gate-overlay"]')

  if (ageGateVisible) {
    await page.locator('[data-test="age-gate-grown-up-cta"]').click()
    console.debug('Age gate modal closed')
  } else {
    console.debug('Age gate modal not visible')
  }
}

const clearCookieModal = async (page: Page) => {
  const cookieSettingsVisible = await page.locator(
    '[data-test="cookie-modal-content"]'
  )

  if (cookieSettingsVisible) {
    await page.locator('[data-test="cookie-necessary-button"]').click()
    console.debug('Cookie modal closed')
  } else {
    console.debug('Cookie modal not visible')
  }
}

export { clearAgeGate, clearCookieModal }
