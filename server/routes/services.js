const router = require('express').Router();
const { getEightServicesList, getWithoutDetailsServicesList, getServicesListWithDescriptions } = require('../controllers/services'); 

const getData = async () => {
    try {                                               
        const eightServicesList = await getEightServicesList()
        const withoutDetailsServicesList = await getWithoutDetailsServicesList()
        const servicesListWithDescriptions = await getServicesListWithDescriptions()
 
        module.exports.eightServicesList = eightServicesList
        module.exports.withoutDetailsServicesList = withoutDetailsServicesList
        module.exports.servicesListWithDescriptions = servicesListWithDescriptions

    } catch {
        console.log('Error (service)')
    }  
}

getData();

router.get('/', (req, res) => {
    res.send({
        eightServicesList: router.eightServicesList,
        withoutDetailsServicesList: router.withoutDetailsServicesList,
        servicesListWithDescriptions: router.servicesListWithDescriptions
    })
})

module.exports = router