const express = require('express')
const db = require('../db/users')

const router = express.Router()

module.exports = router

// add rest of register things here
// POST /api/koios/api
router.post('/', async (req, res) => {
  const newUser = req.body
  const { auth0Id, email, firstName, lastName } = newUser
  const user = {
    auth0_id: auth0Id,
    email,
    first_name: firstName,
    last_name: lastName
  }
  try {
    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.patch('/', (req, res) => {
  const { id, profile } = req.body
  db.editProfile(id, profile)
    .then(profile => {
      res.json(profile)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})
