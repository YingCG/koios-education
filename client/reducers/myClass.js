import { ADD_TO_CLASS, DELETE_CLASS } from '../actions/myClass'

const inintial = []

export default function reducer (currentState = inintial, action) {
  switch (action.type) {
    case ADD_TO_CLASS:
      return [
        ...currentState,
        action.topics
      ]

    case DELETE_CLASS:
      return currentState.filter(topic => topic !== action.topic)
    default:
      return currentState
  }
}
