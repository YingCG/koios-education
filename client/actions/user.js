import { getProfile, editProfile } from '../api/user'

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const UPDATE_PROFILE = ' UPDATE_PROFILE'
export const UPDATE_PROFILE_SUCCESS = ' UPDATE_PROFILE_SUCCESS'

export function setUser (user) {
  return {
    type: SET_USER,
    user: user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

export function fetchProfile () {
  return (dispatch) => {
    return getProfile()
      .then((profile) => {
        dispatch(fetchProfileSuccess())
        return profile
      })
      .catch(err => console.error(err))
  }
}

export function fetchProfileSuccess (profile) {
  return {
    type: FETCH_PROFILE_SUCCESS,
    profile: profile
  }
}

export function updateProfile (profile, updatedProfile) {
  return (dispatch) => {
    dispatch(editProfile())
    return editProfile(profile)
      .then((updatedProfile) => {
        dispatch(updateProfileSuccess(updatedProfile))
        return null
      })
      .catch(err => console.error(err))
  }
}

export function updateProfileSuccess (updatedProfile) {
  return {
    type: UPDATE_PROFILE,
    profile: updatedProfile
  }
}
