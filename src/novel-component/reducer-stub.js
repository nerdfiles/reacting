/**
 * @name reducers-stub
 */
import { ACTION_KEY } from './actions'

const act = (occasion = [], action) => {
  switch (action.type) {
    case ACTION_KEY:
      return {
        key: 'value'
      }
    default:
      break
  }
  return occasion
}

export default act

// EOF
