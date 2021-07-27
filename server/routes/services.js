const router = require('express').Router();
const { getAllServicesList, getShortServicesList } = require('../controllers/services'); 

const getData = async () => {
    try {                                               
        const allServicesList = await getAllServicesList()
        const ShortServicesList = await getShortServicesList()

        console.log(allServicesList)
 
        module.exports.allServicesList = allServicesList
        module.exports.ShortServicesList = ShortServicesList

    } catch {
        console.log('Error (service)')
    }  
}

getData();

router.get('/', (req, res) => {
    res.send({
        'page': 'services'
    })
})

module.exports = router