const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    // mLab will automatically create ID field for all the entries
    name: String,
    age: Number,
});

module.exports = mongoose.model('Author', authorSchema);