const bcrypt = require("bcryptjs");

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
const loginUser = async(req, res) => {
    res.json("Login a user");
};





//User profile
const getUsers = async(req, res) => {
    res.json("User profile");
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
const getAllUsers = async(req, res) => {
    res.json("Get all users");
};





module.exports = {
    registerUser,
    loginUser,
    getUsers,
    changePicture,
    editUser,
    getAllUsers
};