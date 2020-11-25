const express = require('express')
const path = require('path')

const app = express()
const randomWord = require('./server/routes/random_word')
const sentiment = require('./server/routes/sentiment')
const synonyms = require('./server/routes/synonyms')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', randomWord)
app.use('/', sentiment)
app.use('/', synonyms)

const port = 1301
app.listen(port, function(){
    console.log(`Server running on ${port}`)
})