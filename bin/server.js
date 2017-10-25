'use strict'

const http = require('http')
const app = require('../src/app')

const port = normalizePort(process.env.PORT || 5000)

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)

// console.log('\x1B[2J\x1B[0f'); // Clear console
console.log("Server started on port " + port)

function normalizePort (val) {
  const port = parseInt(val, 10)

  if(isNaN(port)) return val
  if(port >= 0) return port

  return false
}

function onError(error){
  if(error.syscall !== 'listen') throw error

  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break;
    case 'EADDRINUSE':
      console.error(bind + " is already in use")
      process.exit(1)
      break;
    default:
      throw error
  }
}
