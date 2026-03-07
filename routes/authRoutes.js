import express from 'express';
import { register, registerUser, login, loginUser } from '../controllers/authControllers.js';
import { userValidationSchema } from '../middlewares/validations.js';


const router = express.Router();

router.get('/register',register);
router.post('/register', userValidationSchema, registerUser);
router.get('/login', login);
router.post('/login', loginUser);

export default router;