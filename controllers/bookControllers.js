import { getBook } from "../services/bookServices.js";

export const getBookById = async(req, res)=>{
    try{
        const bookId = req.params.id;
        const data = getBook(bookId);

        console.log(data)
        res.render('users/home', {book: data});
    }catch(err){
        res.render('/error', {error: 'Something went wrong'});
    }
}
