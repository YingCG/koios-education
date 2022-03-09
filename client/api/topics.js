import request from 'superagent'

export function getTopics (subject) {
  return request.get(`/api/v1/subjects/${subject}`)
}

export function getTopicInfo (topicId, subject) {
  return request.get(`/api/v1/subjects/${subject}/${topicId}`)
}

export function getLinks (topicId, subject) {
  return request.get(`/api/v1/subjects/${subject}/${topicId}/links`)
}
