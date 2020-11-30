// Server setup
const express = require('express')
const path = require('path')
const app = express()
const api = require('./server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)

const port = 1301
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

