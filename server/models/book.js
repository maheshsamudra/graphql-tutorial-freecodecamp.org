const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // mLab will automatically create ID field for all the entries
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);