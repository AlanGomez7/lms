import bcrypt from 'bcrypt';

const loginService = () => {
    try {

        const user = User.findOne({ email });

        if (!user) {
            return res.render("auth/login", { error: "Invalid credentials" });
        }

        const valid = bcrypt.compare(password, user.password);
    } catch (err) {
        return {status: err.status, message: err.message, success: false};
    }
}