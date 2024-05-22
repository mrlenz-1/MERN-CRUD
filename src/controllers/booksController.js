const bookService = require("../services/bookService");


class BooksController {

    async createBook(req, res) {
        try {
            const { name, author, genre } = req.body;
            const saveBook = await bookService.createBook(name, author, genre);
            res.json(saveBook);

        } catch(err) {
            res.status(500).json({ err: err.message }); 

        }
    }

    async getAllBooks(req, res) {
        try {
           const books = await bookService.getAllBooks();
            res.json(books);
            
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }

    async getBookById(req, res) {
        const bookId = req.params.id;
        try {
            const book = await bookService.getBookById(bookId);
            if(!book)
                return res.status(404).json({ error: "Book not Found"});
            res.json(book);
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }

    async updateBook(req, res) {
        const bookId = req.params.id;
        const updatedData = req.body;
        try {
            const updatedBook = await bookService.updateBook(bookId, updatedData);
            if(!updatedBook)
                return res.status(404).json({ error: "Book not Found"});
            res.json(updatedBook);
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }

    async deleteBook(req, res) {
        const bookId = req.params.id;
        try {
            const deletedBook = await bookService.deleteBook(bookId);
            if(!deletedBook)
                return res.status(404).json({ error: "Book not Found"});
            res.json({ message: "Book Deleted",book: deletedBook });
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }




};

module.exports = new  BooksController();