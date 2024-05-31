//Register a new user
const registerUser = async(req, res) => {
    res.json("Register a new user");
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