const express = require('express')
const router = express.Router()

router.get('/randomWord', function (req, res) {
    let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
    res.send(words[Math.floor(Math.random() * words.length)])
})

module.exports = router