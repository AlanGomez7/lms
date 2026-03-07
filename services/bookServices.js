import books from "../models/bookModel.js";

export const getBook = (id) => {
    return books.findById(id);
};

export const getAllBooks = (skip, limit) => {
    return books.find({ isDeleted: false }).skip(skip).limit(limit);
}

export const addBook = (data) => {
    return books.insertMany(data);
}

export const deleteBook = (id) => {
    return books.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

export const NumberOfBooks = () => {
    return books.countDocuments({ isDeleted: false })
}

export const searchBook = (data, skip, limit) => {
    return books.find({
        isDeleted: false,
        $or: [
            { title: { $regex: data, $options: "i" } },
            { publisher: { $regex: data, $options: "i" } },
            { author: { $regex: data, $options: "i" } },
            { isbn: { $regex: data, $options: "i" } },
            { category: { $regex: data, $options: "i" } }
        ]
    }).skip(skip).limit(limit)
};

export const searchQueryCount = (data) => {
    const query = [
        { title: { $regex: data, $options: "i" } },
        { publisher: { $regex: data, $options: "i" } },
        { author: { $regex: data, $options: "i" } },
        { isbn: { $regex: data, $options: "i" } },
        { category: { $regex: data, $options: "i" } }
    ];

    return books.countDocuments({isDeleted: false, $or: query});
}