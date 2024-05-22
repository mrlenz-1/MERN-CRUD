const mongoose = require("../config/dbConfig");


const booksSchema = new mongoose.Schema({
    name: String,
    author: String,
    genre: String

});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;