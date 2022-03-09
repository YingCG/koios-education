const express = require('express')
const router = express.Router()
// const checkJwt = require('../auth0')
const db = require('../db/myClass')
// /api/v1/myclass
router.get('/', (req, res) => {
  const userId = req.query.userId
  db.showMyClasses(userId)
    .then((listOfMyClasses) => {
      console.log('list of my classes', listOfMyClasses)
      res.json(listOfMyClasses)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Sign Up for the contents' })
    })
})
// no need to get as there might not be anything in the cart
router.get('/topics', (req, res) => {
  db.getTopicsByUserId()
    .then((selectedTopics) => {
      res.json(selectedTopics)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Sign Up for the contents' })
    })
})

router.post('/', (req, res) => {
  db.addMyClass(req.body)
    .then(() => {
      // console.log(req.body)
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.patch('/', (req, res) => {
  const { topicId, userId, status } = req.body
  const updatedInfo = { topicId, userId, status }
  db.editTopicStatus(updatedInfo)
    .then((event) => {
      res.status(200).json(event)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.delete('/:userAuth/:topicId', (req, res) => {
  const topicId = req.params.topicId
  const userId = req.query.userId
  console.log('user: ', userId)
  console.log('topic', topicId)
  db.deleteFromMyClass(topicId, userId)
    .then(() => {
      res.sendStatus(204)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

// GET /api/v1/myclass/:id
router.get('/:id', (req, res) => {
  const topicId = req.params.id
  db.getSubjectByTopicId(topicId)
    .then(name => {
      res.json(name)
      return null
    })
    .catch(err => {
      console.error('Error: ', err)
      res.status(500)
    })
})

module.exports = router
