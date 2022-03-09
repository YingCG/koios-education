const path = require('path')
const express = require('express')

// Add in route requirements
const userRoutes = require('./routes/users')
const founders = require('./routes/founders')
const subjects = require('./routes/subjects')
const data = require('./routes/data')
const myClass = require('./routes/myclass')

require('dotenv').config({ path: path.join(__dirname, '.env') })
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// add in use routes
// server.use('//api/koios', education)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/subjects', subjects)
server.use('/api/v1/about', founders)
server.use('/api/v1/satellitedata', data)
server.use('/api/v1/myclass', myClass)

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
