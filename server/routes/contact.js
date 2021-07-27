const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({
        'page': 'contact'
    })
})

module.exports = router