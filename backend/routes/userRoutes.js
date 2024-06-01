const { Router } = require('express');


const { registerUser, loginUser, getUsers, changePicture, editUser, getAllUsers } = require("../controllers/userControllers.js");

const authMiddleware = require("../middleware/authMiddleware.js");


const router = Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUsers);
router.post('/change-picture',authMiddleware,  changePicture);
router.patch('/edit-user', editUser);
router.get('/', getAllUsers);



module.exports = router;