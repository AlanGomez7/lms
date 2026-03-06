import express from 'express';
import {
    addBook,
    deleteBook,
    getBookById,
    getAllBooks
} from '../controllers/bookControllers.js';
import { bookValidationSchema } from '../middlewares/validations.js'



const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/add', bookValidationSchema, addBook);
router.delete('/delete/:id', deleteBook);

// router.get('/', getBooks);
// router.get('/search', search);
// router.put('/update/:id', updateBook);

export default router;