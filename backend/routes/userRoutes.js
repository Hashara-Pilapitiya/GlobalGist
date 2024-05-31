const express = require('express');


const { registerUser, loginUser, getUsers, changePicture, editUser, getAllUsers } = require("../controllers/userControllers.js");


const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUsers);
router.post('/change-picture', changePicture);
router.patch('/edit-user', editUser);
router.get('/', getAllUsers);



module.exports = router;