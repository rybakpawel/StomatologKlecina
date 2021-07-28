const router = require('express').Router();
const getComments = require('../controllers/comments');

const getData = async () => {
    try {                                               
        const comments = await getComments()
 
        module.exports.comments = comments

    } catch {
        console.log('Error (service)')
    }  
}

getData();

router.get('/', (req, res) => {
    res.send({
        comments: router.comments
    })
})

module.exports = router