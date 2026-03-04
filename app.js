import express from 'express';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import bookRoutes from './routes/bookRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';
import dbConnection from './config/connection.js';

const app = express();
app.use(express.json());

// db connection
dbConnection();

// view engine
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use('/', userRoutes);
app.use('/admin', adminRoutes);
app.use('/books', bookRoutes)


export default app;