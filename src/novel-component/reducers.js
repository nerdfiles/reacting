/**
 * @name reducers
 */
import { combineReducers } from 'redux'
import stubReducer from './reducer-stub'

const reducerList = {
  stub: stubReducer
}

export default combineReducers(reducerList)

// EOF
