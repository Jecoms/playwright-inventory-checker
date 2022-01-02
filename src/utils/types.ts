import { Browser, Page } from 'playwright'

interface Session {
  browser: Browser
  page: Page
  requestId: string
  error: undefined
}

interface SessionError {
  browser: undefined
  page: undefined
  requestId: string
  error: string
}

enum FeatureAction {
  LegoSetInStockCheckHomeAlone = 'Lego-SetInStockCheck-HomeAlone'
}

export { FeatureAction, Session, SessionError }
