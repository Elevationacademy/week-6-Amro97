const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/person', function (req, res) {
    const info = req.body
    let person = new Person({
        firstName: info.firstName,
        lastName: info.lastName,
        age: info.age
    })
    person.save()
    res.end()
})

module.exports = router