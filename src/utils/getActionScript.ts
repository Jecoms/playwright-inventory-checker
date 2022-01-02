import {
  FeatureAction,
  FeatureActionScript,
  Logger,
  RuntimeError
} from './types'
import { script as homeAloneSetScript } from '../features/lego/setInStockCheck/homeAlone'

const getActionScript = (
  action: FeatureAction,
  logger: Logger
): [FeatureActionScript, RuntimeError] => {
  switch (action) {
    case FeatureAction.LegoSetInStockCheckHomeAlone:
      logger.debug(
        `${FeatureAction.LegoSetInStockCheckHomeAlone} action selected`
      )
      return [homeAloneSetScript, undefined]
    default:
      return [undefined, `Script not implemented for action: [${action}]`]
  }
}

export { getActionScript }
