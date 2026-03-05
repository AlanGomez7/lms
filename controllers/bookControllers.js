import * as bookServices from "../services/bookServices.js";
import { validationResult } from "express-validator";

export const getBookById = async (req, res) => {
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
