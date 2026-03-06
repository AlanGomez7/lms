import * as bookServices from "../services/bookServices.js";
import { validationResult } from "express-validator";

export const getBookById = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        if (!bookId) {
            res.render("/error", { error: '' });
        }
        const data = getBook(bookId);

        res.render('users/home', { book: data });
    } catch (err) {
        res.render('/error', { error: 'Something went wrong' });
    };
}

export const getAllBooks = async (req, res, next)=>{
    try{
        const page = JSON.parse(req.query.page, 10) || 1;
        const limit = JSON.parse(req.query.limit, 10) || 10;

        const skip = (page - 1 ) * limit;

        const length = await bookServices.NumberOfBooks();
        const books = await bookServices.getAllBooks(skip, limit);
        console.log(books)
        res.render('users/home', {books: books, length: Math.ceil(length/limit), currentPage:page});
    }catch(err){
        console.log(err)
    }
}

export const addBook = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        };

        const data = await bookServices.addBook(req.body);

        res.status(200).json(data);
        
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' });
    };
}

export const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ error: 'Invalid book id' });
        };

        const response = await bookServices.deleteBook(id);
        res.status(200).json({ message: 'Book deleted successfully', data: response });
        
    } catch (err) {
        next(err);  
    }
}
