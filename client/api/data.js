import request from 'superagent'

export function getDataTypes () {
  return request.get('/api/v1/satellitedata')
}

export function getData (dataName) {
  return request.get(`/api/v1/satellitedata/${dataName}`)
}
