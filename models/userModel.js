import { model, Schema } from "mongoose";

const UserModel = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

    membershipDate: {
        type: Date,
        default: Date.now,
    },

    status: {
        type: String,
        enum: ["active", "blocked"],
        default: "active",
    },

    isDeleted: {
        type:Boolean,
        default: false
    }

},
    {
        timestamps: true,
    });

export default model('Borrows', UserModel);