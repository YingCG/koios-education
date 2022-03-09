const connection = require('./connection')

module.exports = {
  userExists,
  getUserByName,
  createUser
}

function userExists (authId, db = connection) {
  return db('users')
    .count('auth0_Id as n')
    .where('auth0_Id', authId)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (authId, db = connection) {
  return db('users')
    .select()
    .where('auth0_Id', authId)
    .first()
}

function createUser (user, db = connection) {
  // you'll need to write this one
  return db('users')
    .insert(user)
}
