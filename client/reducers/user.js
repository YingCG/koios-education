import { SET_USER, CLEAR_USER, UPDATE_PROFILE_SUCCESS } from '../actions/user'

const emptyUser = {
  auth0Id: '',
  email: '',
  token: ''
}

export default function user (state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      return action.user

    case CLEAR_USER:
      return emptyUser

    case UPDATE_PROFILE_SUCCESS:
      return state.map(
        profile => profile.id === action.profile.id ? action.profile : profile
      )

    default:
      return state
  }
}
