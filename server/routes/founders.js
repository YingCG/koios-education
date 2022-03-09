const express = require('express')
const db = require('../db/founders')

const router = express.Router()
module.exports = router

// GET /api/v1/about
router.get('/', (req, res) => {
  db.getFounders()
    .then(founders => {
      res.json({ founders })
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve profiles.'
        }
      })
    })
})
