const Commment = require('../models/Comment');

const getComments = async () => {
    try {
        const comments = await Commment.find({}, (err) => {
            if (err) console.log(`'Comments' not found.`)
        })
        
        return await comments

    } catch {
        console.log('Error (comment)')
    }
}

module.exports = getComments