import { validationResult } from "express-validator";
import { generateAccessToken, generateRefreshToken } from "../utils/tokens.js";

export const register = (req, res, next) => {
    try {
        res.render('auth/register');
    } catch (err) {
        next();
    };
};

export const registerUser = (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        res.status(200).json({ message: req.body });
    } catch (err) {
        next(err);
    };
};

export const login = (req, res, next) => {
    try {
        res.render('auth/login')
    } catch (err) {
        next(err);
    };
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!valid) {
            return res.render("auth/login", { error: "Invalid credentials" });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.redirect("/books?page=1&limit=10");
    } catch (err) {
        next();
    }
}