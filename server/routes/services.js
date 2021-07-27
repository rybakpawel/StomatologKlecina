const router = require('express').Router();
const { getAllServicesList, getShortServicesList } = require('../controllers/services'); 

const getData = async () => {
    try {                                               
        const allServicesList = await getAllServicesList()
        const shortServicesList = await getShortServicesList()
 
        module.exports.allServicesList = allServicesList
        module.exports.shortServicesList = shortServicesList

    } catch {
        console.log('Error (service)')
    }  
}

getData();

router.get('/', (req, res) => {
    res.send({
        allServicesList: router.allServicesList,
        shortServicesList: router.shortServicesList
    })
})

module.exports = router