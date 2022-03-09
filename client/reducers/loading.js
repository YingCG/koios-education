import { SET_LOADING, SET_READY } from '../actions/myClass'

export default function reducer (state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return true
    case SET_READY:
      return false
    default:
      return state
  }
}
