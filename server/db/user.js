const connection = require('./connection')

function getUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .select()
    .first()
    .then(result => {
      return result
    })
}

function editProfile (id, newProfile, db = connection) {
  return db('users')
    .where('id', id)
    .update({ profile: newProfile })
}

module.exports = {
  getUser,
  editProfile
}
