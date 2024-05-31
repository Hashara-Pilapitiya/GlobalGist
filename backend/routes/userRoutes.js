const express = require('express');


const { registerUser, loginUser, getUsers, changePicture, editUser, getAllUsers } = require("../controllers/userControllers.js");


const route = express.Router();


route.post('/register', registerUser);
route.post('/login', loginUser);
route.get('/:id', getUsers);
route.post('/change-picture', changePicture);
route.patch('/edit-user', editUser);
route.get('/', getAllUsers);



module.exports = route;