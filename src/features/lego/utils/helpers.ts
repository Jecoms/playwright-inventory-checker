import { Page } from 'playwright'
import { Logger } from '../../../utils/types'

const clearAgeGate = async (page: Page, logger: Logger) => {
  const ageGateVisible = await page.locator('[data-test="age-gate-overlay"]')

  if (ageGateVisible) {
    await page.locator('[data-test="age-gate-grown-up-cta"]').click()
    logger.debug('Age gate modal closed')
  } else {
    logger.debug('Age gate modal not visible')
  }
}

const clearCookieModal = async (page: Page, logger: Logger) => {
  const cookieSettingsVisible = await page.locator(
    '[data-test="cookie-modal-content"]'
  )

  if (cookieSettingsVisible) {
    await page.locator('[data-test="cookie-necessary-button"]').click()
    logger.debug('Cookie modal closed')
  } else {
    logger.debug('Cookie modal not visible')
  }
}

export { clearAgeGate, clearCookieModal }
