import { Browser, Page } from 'playwright'

interface Session {
  browser: Browser
  page: Page
}

enum FeatureAction {
  Unknown = 'Unknown',
  Invalid = 'Invalid',
  LegoSetInStockCheckHomeAlone = 'Lego-SetInStockCheck-HomeAlone'
}

interface Logger {
  debug: (message: string) => void
  info: (message: string) => void
  warn: (message: string) => void
  error: (message: RuntimeError) => void
}

type FeatureActionScript = (
  page: Page,
  requestId: string,
  logger: Logger
) => Promise<void>

type RuntimeError = string | undefined

export { FeatureAction, FeatureActionScript, Logger, RuntimeError, Session }
