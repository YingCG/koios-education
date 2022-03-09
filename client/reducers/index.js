import { combineReducers } from 'redux'

import user from './user'
import error from './error'
import myClass from './myClass'
import loading from './loading'

export default combineReducers({
  user,
  myClass,
  loading,
  error
})
