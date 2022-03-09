import request from 'superagent'

export function getSubjects () {
  return request.get('/api/v1/subjects')
}
