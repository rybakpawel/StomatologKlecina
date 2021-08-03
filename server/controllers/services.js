const Service = require('../models/Service');

const compareID = (a, b) => {
    return a.id - b.id;
}

const getEightServicesList = async () => {
    try {
        const services = await Service.find({}, (err) => {
            if (err) console.log(`'Services' not found.`)
        }).limit(8)
        
        return await services

    } catch {
        console.log('Error (service)')
    }
}

const getWithoutDetailsServicesList = async () => {
    try {
        const services = await Service.find({
            "details": {$ne: null}}, (err) => {
            if (err) console.log(`'Services' not found.`)
        })
        return await services

    } catch {
        console.log('Error (service)')
    }
}

const getServicesListWithDescriptions = async () => {
    try {
        const services = await Service.find({
            "description": {$ne: null}}, (err) => {
            if (err) console.log(`'Services' not found.`)
        })

        const sortedServices = services.sort(compareID)

        return await sortedServices
    } catch {
        console.log('Error (service)')
    }
}

module.exports =  {
    getEightServicesList,
    getWithoutDetailsServicesList,
    getServicesListWithDescriptions
}