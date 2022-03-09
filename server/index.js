const server = require('./server')

const port = process.env.PORT || 8000

// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   const envConfig = require('dotenv').config()
//   if (envConfig.error) throw envConfig.error
// }

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})
