import express from 'express';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dbConnection from './config/connection.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// db connection
dbConnection();

// view engine
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/', userRoutes);
app.use('/admin', adminRoutes);
app.use('/books', bookRoutes);
app.use('/auth', authRoutes);


app.use((req, res)=>{
    res.status(404).json('not found');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
    });
    next();
});


export default app;