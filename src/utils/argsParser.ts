import { FeatureAction } from './types'

const readArgs = () => {
  const [_, __, argsAction] = process.argv

  let action = argsAction as FeatureAction
  let error = ''

  if (action === undefined) {
    error = 'No action specified'
  } else if (!Object.values(FeatureAction).includes(action)) {
    error = `[${action}] is not a valid action`
  }

  return {
    action,
    error
  }
}

export { readArgs }
