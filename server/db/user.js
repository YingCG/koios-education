const connection = require('./connection')

module.exports = {
  getUser,
  getUserById,
  editProfile
}

function getUser (authId, db = connection) {
  return db('users')
    .where('auth0_id', authId)
    .first()
    .select()
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .first()
    .select()
}

function editProfile (authId, newProfile, db = connection) {
  return db('users')
    .where('auth0_id', authId)
    .update({ profile: newProfile })
}
