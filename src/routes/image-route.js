'use strict'

const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'views/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '.jpg')
  }
})

const upload = multer({ storage: storage })

router.post('/', upload.single('mobe'), (req, res) => {
  res.send(req.body.name)
})

module.exports = router
