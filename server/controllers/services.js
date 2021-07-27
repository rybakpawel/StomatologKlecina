const Service = require('../models/Service');

const getAllServicesList = async () => {
    try {
        const services = await Service.find({}, (err) => {
            if (err) console.log(`'Services' not found.`)
        })
        
        return await services

    } catch {
        console.log('Error (service)')
    }
}

const getShortServicesList = async () => {
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

module.exports =  {
    getAllServicesList,
    getShortServicesList
}