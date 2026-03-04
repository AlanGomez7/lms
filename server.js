import http from 'http'
import dotenv from 'dotenv';
import app from './app.js'

dotenv.config();

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(PORT , ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});