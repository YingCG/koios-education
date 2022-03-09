import { getMyClass, addToMyClass } from '../api/myclass'

export const ADD_TO_CLASS = 'ADD_TO_CLASS'
export const DELETE_CLASS = 'DELETE_CLASS'
export const SET_LOADING = 'SET_LOADING'
export const SET_READY = 'SET_READY'

export function addTopics (topics) {
  return {
    type: ADD_TO_CLASS,
    topics: topics
  }
}

export function setLoading () {
  return {
    type: SET_LOADING
  }
}

export function setReady () {
  return {
    type: SET_READY
  }
}

export function fetchTopics () {
  return (dispatch) => {
    dispatch(setLoading())

    return getMyClass()
      .then(topics => {
        dispatch(addTopics(topics))

        dispatch(setReady())
        return null
      })
      .catch(err => console.error(err))
  }
}

export function postTopics (newTopic) {
  return function (dispatch) {
    dispatch(setLoading())

    return addToMyClass(newTopic)
      .then(() => {
        return getMyClass()
      })
      .then(topics => {
        dispatch(addTopics(topics))
        dispatch(setReady())
        return null
      })
      .catch(err => console.error(err))
  }
}

export function deleteFromClass (topic) {
  return {
    type: DELETE_CLASS,
    topic
  }
}
