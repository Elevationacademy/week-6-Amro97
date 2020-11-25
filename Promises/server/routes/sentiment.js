const express = require('express')
const router = express.Router()

router.get('/sentiment/:word', function (req, res) {
    let word = req.params.word
    let wordSentiment = {
        'Absolute': 1,
        'Astute': 1,
        'Azure': 0,
        'Bright': 1,
        'Bonanza': 1,
        'Elusive': -1,
        'Erode': -1,
        'Hindrance': -1,
        'Phonic': 0,
        'Ploy': 0,
        'Polaroid': 0,
        'Yap': -1,
        'Yonder': -1
    }

    res.send(JSON.stringify(wordSentiment[word]))
})

module.exports = router