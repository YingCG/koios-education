const connection = require('./connection')

module.exports = {
  showMyClasses,
  addMyClass,
  editTopicStatus,
  deleteFromMyClass,
  getTopicsByUserId,
  getSubjectByTopicId
}

function showMyClasses (userId, db = connection) {
  console.log(typeof userId)

  return db('my_classes')
    .join('topics', 'my_classes.topic_id', 'topics.id')
    .select(
      'topics.name as name',
      'user_auth0_Id as userId',
      'topic_id as topicId',
      'created_at as createdAt',
      'status'
    )

  // console.log('showing classes', userId)
  // return db('my_classes')
  //   .join('topics', 'my_classes.topic_id', 'topics.id')
  //   .where('user_auth0_id', userId)
  //   .select(
  //     'topics.name as name',
  //     'user_auth0_Id as userId',
  //     'topic_id as topicId',
  //     'created_at as createdAt',
  //     'status'
  //   )
}

function addMyClass (selectTopic, db = connection) {
  const myClass = {
    user_id: selectTopic.userId,
    topic_id: selectTopic.topicId,
    created_at: new Date(Date.now()),
    status: 'in progress'
  }
  // console.log(myClass)
  return db('my_classes')
    .insert(myClass)
    .then(() => null)
}

function editTopicStatus (updatedInfo, db = connection) {
  const { topicId, userId, status } = updatedInfo
  return db('my_classes')
    .where('topic_id', topicId)
    .andWhere('user_id', userId)
    .update({
      status: status
    })
    .then(() => findByTopicIdAndUserId(topicId, userId, db))
}

function findByTopicIdAndUserId (topicId, userId, db = connection) {
  return db('my_classes')
    .join('users', 'my_classes.user_id', 'users.id')
    .join('topics', 'my_classes.topic_id', 'topics.id')
    .where('topic_id', topicId)
    .andWhere('user_id', userId)
    .select(
      'users.id as userId',
      'topics.id as topicId',
      'created_at as createdAt',
      'status'
    )
}

function getTopicsByUserId (userId, db = connection) {
  return db('my_classes')
    .where('user_id', userId)
    .join('topics', 'users.topics_id', 'users.id')
    .select(
      'users.id as userId',
      'topics.id as topicId',
      'created_at as createdAt',
      'topics.name as topicName',
      'status'
    )
    .first()
}

function deleteFromMyClass (topicId, userId, db = connection) {
  console.log('deleting')
  return db('my_classes')
    .where('topic_id', topicId)
    .andWhere('user_id', userId)
    .del()
}

function getSubjectByTopicId (id, db = connection) {
  return db('topics')
    .where('topics.id', id)
    .join('subjects', 'subject_id', 'subjects.id')
    .select('subjects.search_name as subjectName')
    .first()
}
