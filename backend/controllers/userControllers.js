//Register a new user
const registerUser = (req, res, next) => {
    res.json("Register a new user");
};

//Login a user
const loginUser = (req, res) => {
    res.json("Login a user");
};

//User profile
const getUsers = (req, res) => {
    res.json("User profile");
};

//Update user profile(only profile picture)
const changePicture = (req, res) => {
    res.json("Update user profile picture");
};

//Edit user details
const editUser = (req, res) => {
    res.json("Edit user details");
};

//Get all users
const getAllUsers = (req, res) => {
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