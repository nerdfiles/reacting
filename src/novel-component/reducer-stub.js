/**
 * @name reducers-stub
 */
import { ACTION_KEY } from './actions'

const act = (state = [], action) => {
  switch (action.type) {
    case ACTION_KEY:
      return {
        key: 'value'
      }
    default:
      break
  }
  return state
}

export default act

// EOF
