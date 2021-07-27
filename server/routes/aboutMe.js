const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({
        'page': 'aboutme'
    })
})

module.exports = router