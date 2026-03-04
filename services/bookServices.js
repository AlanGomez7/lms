import books from "../models/bookModel.js";

export const getBook = (id) => {
    return books.findById(id);
};