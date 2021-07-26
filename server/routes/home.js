const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({
        'page': 'home'
    })
})

module.exports = router