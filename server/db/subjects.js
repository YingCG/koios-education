const connection = require('./connection')

module.exports = {
  getSubjects,
  getSubjectById,
  getSubjectId,
  getTopicsBySubjectId,
  getTopicById,
  getLinksByTopicId
}

function getSubjects (db = connection) {
  return db('subjects')
    .select()
}

function getSubjectId (name, db = connection) {
  const casedName = name.toLowerCase()
  return db('subjects')
    .where('search_name', casedName)
    .select('id')
    .first()
}

function getSubjectById (id, db = connection) {
  return db('subjects')
    .where('id', id)
    .select()
    .first()
}

function getTopicsBySubjectId (id, db = connection) {
  return db('topics')
    .where('subject_id', id)
    .select()
}

function getTopicById (id, db = connection) {
  return db('topics')
    .where('id', id)
    .select()
}

function getLinksByTopicId (id, db = connection) {
  return db('Links')
    .where('topic_id', id)
    .select()
}
