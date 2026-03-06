import books from "../models/bookModel.js";

export const getBook = (id) => {
    return books.findById(id);
};

export const getAllBooks = (skip, limit) => {
    return books.find({isDeleted: false}).skip(skip).limit(limit);
}

export const addBook = (data) => {
    return books.insertMany(data);
}

export const deleteBook = (id) => {
    return books.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

export const NumberOfBooks = ()=>{
    return books.countDocuments({isDeleted: false})
}