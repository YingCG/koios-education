export const SET_SUBJECT = 'SET_SUBJECT'
export const UPDATE_TOPIC = 'UPDATE_TOPIC'

export function setSubject (subject) {
  return {
    type: SET_SUBJECT,
    subject
  }
}

export function updateTopic (topicId) {
  return {
    type: UPDATE_TOPIC,
    topicId
  }
}
