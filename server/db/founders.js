const connection = require('./connection')

module.exports = {
  getFounders
}

function getFounders (db = connection) {
  return db('founders')
    .select()
}
