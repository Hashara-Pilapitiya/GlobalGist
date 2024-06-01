const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HTTPError = require("../models/errorModel.js");
const User = require("../models/userModel.js");


//Register a new user
const registerUser = async(req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password) {
            return next(new HTTPError("All fields are required." , 422));
        }

        const newEmail = email.toLowerCase();

        //Check if user already exists
        const emailExists = await User.findOne({ email: newEmail });
        if (emailExists) {
            return next(new HTTPError("Email already exists.", 422));
        }

        if (password.length < 8) {
            return next(new HTTPError("Password should be at least 6 characters.", 422));
        }

        if (password !== password2) {
            return next(new HTTPError("Passwords do not match.", 422));
        }

        //const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            name,
            email: newEmail,
            password: hashedPassword,
        });

        res.status(201).json(newUser.email + " has been registered successfully.");

    } catch (error) {
        return next(new HTTPError("Registration failed, please try again", 422));
    }
};








//Login a user
const loginUser = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new HTTPError("All fields are required.", 422));
        }

        const newEmail = email.toLowerCase();

        const user = await User.findOne({ email: newEmail });
        if (!user) {
            return next(new HTTPError("Invalid email or password.", 422));
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next(new HTTPError("Invalid email or password.", 422));
        }

        const { _id: id, name } = user;
        const token = jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({ token, id, name });

    } catch (error) {
        return next(new HTTPError("Login failed, please try again", 422));
    }
};









//User profile
const getUsers = async(req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return next(new HTTPError("User not found.", 404));
        }

        res.status(200).json(user);

    } catch (error) {
    return next(new HTTPError("User not found.", 404));
    }   
};





//Update user profile(only profile picture)
const changePicture = async(req, res) => {
    res.json("Update user profile picture");
};





//Edit user details
const editUser = async(req, res) => {
    res.json("Edit user details");
};









//Get all users
const getAllUsers = async(req, res, next) => {
    try {
        const users = await User.find().select("-password");
        if (!users) {
            return next(new HTTPError("Users not found.", 404));
        }

        res.status(200).json(users);

    } catch (error) {
        return next(new HTTPError("Users not found.", 404));
    }
};





module.exports = {
    registerUser,
    loginUser,
    getUsers,
    changePicture,
    editUser,
    getAllUsers
};