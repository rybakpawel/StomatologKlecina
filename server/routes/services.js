const router = require('express').Router();
const { getWholeServicesList, getShortServicesList } = require('../controllers/services'); 

const getData = async () => {
    try {                                               
        const wholeServicesList = await getWholeServicesList()
        const shortServicesList = await getShortServicesList()
 
        module.exports.wholeServicesList = wholeServicesList
        module.exports.shortServicesList = shortServicesList

    } catch {
        console.log('Error (service)')
    }  
}

getData();

router.get('/', (req, res) => {
    res.send({
        wholeServicesList: router.wholeServicesList,
        shortServicesList: router.shortServicesList
    })
})

module.exports = router