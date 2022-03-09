const server = require('./server')

let port = process.env.PORT
if (port == null || port === '') {
  port = 8000
}

// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   const envConfig = require('dotenv').config()
//   if (envConfig.error) throw envConfig.error
// }

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})
