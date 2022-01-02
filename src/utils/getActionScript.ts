import { FeatureAction } from './types'
import { script as homeAloneSetScript } from '../features/lego/setInStockCheck/homeAlone'

const getActionScript = (action: FeatureAction) => {
  let error: string | undefined

  switch (action) {
    case FeatureAction.LegoSetInStockCheckHomeAlone:
      console.log(
        `${FeatureAction.LegoSetInStockCheckHomeAlone} action selected`
      )
      return { script: homeAloneSetScript, error }
    default:
      error = `Script not implemented for action: [${action}]`
      return { script: () => {}, error }
  }
}

export { getActionScript }
