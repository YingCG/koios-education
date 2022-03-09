const express = require('express')
const db = require('../db/subjects')
const router = express.Router()

module.exports = router

// GET /api/v1/subjects
// To show a list of all of the subject names
router.get('/', (req, res) => {
  db.getSubjects()
    .then(subjects => {
      res.json({ subjects })
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve subjects.'
        }
      })
    })
})

// GET /api/v1/subjects/:subject
// Once you click on a specific subject here you can see a list of all of the topics
router.get('/:subject', (req, res) => {
  const subject = req.params.subject
  db.getSubjectId(subject)
    .then(idPair => {
      const id = idPair.id
      db.getTopicsBySubjectId(id)
        .then(topics => {
          res.json({ topics })
          return null
        })
        .catch(err => {
          console.error(err.message)
          res.status(500).json({
            error: {
              title: 'Unable to retrieve topic information'
            }
          })
        })
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve subject id.'
        }
      })
    })
})

// GET /api/v1/subjects/:subject/:topicId
// Once you click on a specific topic you can see the topic's page
router.get('/:subject/:topicId', (req, res) => {
  const id = req.params.topicId
  db.getTopicById(id)
    .then(topic => {
      res.json({ topic })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500)
    })
})

// GET /api/v1/subjects/:subject/:topicId/links
router.get('/:subject/:topicId/links', (req, res) => {
  const id = req.params.topicId
  db.getLinksByTopicId(id)
    .then(links => {
      res.json({ links })
      return null
    })
    .catch(err => {
      console.error('Error: ', err)
      res.status(500)
    })
})
