'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const busboy = require('connect-busboy')

const app = express()

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(busboy())

// Load routes
const imageRoute = require('./routes/image-route')

// Static
const views = express.static('views')
app.use(views)

// Use routes
app.use('/api/image', imageRoute)

// Page not found
app.use((req, res) => {
  res.status(404).send('Error 404: page not found')
})

module.exports = app
