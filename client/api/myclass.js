import request from 'superagent'
const myClassUrl = '/api/v1/myclass'

export function getMyClass (userId) {
  return request
    .get(myClassUrl + '?userId=' + encodeURIComponent(userId))
    .then((res) => {
      console.log('res', res.body)
      return res.body
    })
    .catch(logError)
}

// export function getMyTopics () {
//   return request
//     .get(myClassUrl)
//     .then((res) => {
//       console.log(res)
//     })
//     .catch(logError)
// }

export function addToMyClass (myclass) {
  console.log(myclass)
  return request
    // .set('authorization', `Bearer ${token}`)
    .post(myClassUrl)
    .send(myclass)
    .catch(logError)
}

export function editMyClass (myClass) {
  return request.patch(myClassUrl)
    // .set('authorization', `Bearer ${token}`)
    .send({ myClass })
    .then((res) => {
      return res.body.myClasses
    })
    .catch(logError)
}

export function deleteClass (id) {
  return request.delete(`/api/v1/myclass/${id}`)
  // .set('authorization', `Bearer ${token}`)
}
function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Sorry, you can\'t delete this class right now.')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}

export function getSubjectName (id) {
  return request.get(`/api/v1/myclass/${id}`)
}

export function removeFromMyClass (userAuth, topicId) {
  return request
    .delete(`/api/v1/myclass/${userAuth}/${topicId}` + '?userId=' + encodeURIComponent(userAuth))
}
