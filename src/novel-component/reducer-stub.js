/**
 * @name reducers-stub
 */
import { ACTION_KEY } from './actions'

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_KEY:
      return {
        key: 'value'
      }
  }
  return state
}

// EOF
