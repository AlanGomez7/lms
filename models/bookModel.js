import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: String,
            required: true,
            trim: true
        },
        isbn: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        published_year: {
            type: Number,
            required: true
        },
        publisher: {
            type: String,
            required: true,
            trim: true
        },
        language: {
            type: String,
            required: true,
            trim: true
        },
        pages: {
            type: Number,
            required: true,
            min: 1
        },
        total_copies: {
            type: Number,
            required: true,
            min: 0
        },
        available_copies: {
            type: Number,
            required: true,
            min: 0,
            validate: {
                validator: function (value) {
                    return value <= this.total_copies;
                },
                message: "Available copies cannot exceed total copies"
            }
        },
        added_date: {
            type: Date,
            default: Date.now
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true // adds createdAt & updatedAt automatically
    }
);




export default model('Book', BookSchema);