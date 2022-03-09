import request from 'superagent'

const rootUrl = '/api/v1/users'

export async function addUser (user) {
  return request.post(`${rootUrl}`)
    .send(user)
    .catch(logError)
}

export function getProfile () {
  return request.get(`${rootUrl}/profile`)
    .then((res) => res.body)
    .catch(logError)
}

export function editProfile (profile) {
  return request.patch(`${rootUrl}/editProfile`)
    .send({
      id: profile.id,
      profile: profile.info
    })
    .then(res => res.body)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the fruit may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}
