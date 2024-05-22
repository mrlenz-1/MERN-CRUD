const Books = require("../models/books");

class BooksService {


    async createBook(name, author, genre) {
        const newBook = new Books({ name, author, genre });
        return await newBook.save();
    }

    async getAllBooks(){
        return await Books.find();
    }

    async getBookById(bookId){
        return await Books.findById(bookId);
    }

    async updateBook(bookId, updatedData){
        return await Books.findByIdAndUpdate(bookId,updatedData,{
            new: true
        });
    }

    async deleteBook(bookId){
        return await Books.findByIdAndDelete(bookId);
    }

};

module.exports = new BooksService();