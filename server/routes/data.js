const express = require('express')
const db = require('../db/data')

const router = express.Router()
module.exports = router

// GET /api/v1/satellitedata
router.get('/', (req, res) => {
  db.getDataTypes()
    .then(dataTypes => {
      res.json({ dataTypes })
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve data types.'
        }
      })
    })
})

// GET /api/v1/satellitedata/:datatype
router.get('/:datatype', (req, res) => {
  const datatype = req.params.datatype
  // get the data_type id from the name
  db.getDataTypeIdByName(datatype)
    .then(idPair => {
      const id = idPair.id
      db.getDataById(id)
        .then(data => {
          res.json(data)
          return null
        })
        .catch(err => {
          console.error(err.message)
          res.status(500).json({
            error: {
              title: 'Unable to retrieve data.'
            }
          })
        })
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve id.'
        }
      })
    })
})
