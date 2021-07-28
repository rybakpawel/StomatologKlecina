const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: Number,
    comment: String,
    name: String
}, { collection: 'comments'});

module.exports = mongoose.model('Comment', commentSchema);