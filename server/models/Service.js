const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    id: Number,
    title: String,
    details: [String],
}, { collection: 'services'});

module.exports = mongoose.model('Services', serviceSchema);