import { FeatureAction, RuntimeError } from './types'

const readArgs = (): [FeatureAction, RuntimeError] => {
  const [_, __, argsAction] = process.argv
  let action = argsAction as FeatureAction
  let error: RuntimeError

  if (action === undefined || action === FeatureAction.Unknown) {
    action = FeatureAction.Unknown
    error = 'No action specified'
  } else if (
    !Object.values(FeatureAction).includes(action) ||
    action === FeatureAction.Invalid
  ) {
    action = FeatureAction.Invalid
    error = `[${action}] is not a valid action`
  }

  return [action, error]
}

export { readArgs }
