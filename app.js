const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const unknownEndpoint = require('./middleware/unknownEndpoint')

app.use(cors())
app.use(express.json())

app.use(express.static('build'))
app.get('*', (req,res) => {
    res.sendFile(path.join('/build/index.html'))
})

app.use(unknownEndpoint)

module.exports = app