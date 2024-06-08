const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

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

        if (password.length < 5) {
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

        res.status(200).json({token, id, name });

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
const changePicture = async(req, res, next) => {
    try {
       if(!req.files.picture) {
           return next(new HTTPError("Please choose an image.", 422));
       }

       //Find user from the database
       const user = await User.findById(req.user.id);

       //Delete old profile picture
       if(user.picture) {
           fs.unlinkSync(path.join(__dirname, '..', 'uploads', user.picture), (err) => {
               if (err) {
                  return next(new HTTPError(err.message, 404));
               }
            })
      }

        const { picture } = req.files;  

        //Check if the image is less than 500000 bytes
        if (picture.size > 500000) {
            return next(new HTTPError("Image should be less than 500KB.", 422));
        }

        let fileName;
        fileName = picture.name;
        let splittedFileName = fileName.split(".");
        let newFileName = "." + splittedFileName[0] + uuid() + splittedFileName[splittedFileName.length - 1];
        picture.mv(path.join(__dirname, '..', 'uploads', newFileName), async(err) => {
            if (err) {
                return next(new HTTPError(err.message, 404));
            }

            const updatedPicture = await User.findByIdAndUpdate(req.user.id, { picture: newFileName }, { new: true });
            if (!updatedPicture) {
                return next(new HTTPError("Profile picture not updated.", 404));
            }

            res.status(200).json(updatedPicture);

        });

    } catch (error) {
    return next(new HTTPError("Profile picture not updated.", 404));
   }
};









//Edit user details
const editUser = async(req, res, next) => {
    try {
        const { name, email, currentPassword, newPassword, newConfirmPassword } = req.body;
        if (!name || !email || !currentPassword || !newPassword) {
            return next(new HTTPError("All fields are required.", 422));
        }

        //Get user from the database
        const user = await User.findById(req.user.id);
        if (!user) {
            return next(new HTTPError("User not found.", 404));
        }

        //Check if the new email is already taken
        const emailExists = await User.findOne({
                email: email.toLowerCase()});
        if (emailExists && emailExists._id !== req.user.id) {
                return next(new HTTPError("Email already exists.", 422));
        }

        //Check if the current password is correct
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return next(new HTTPError("Invalid password.", 422));
        }

        //Compare new password and confirm new password
        if (newPassword !== newConfirmPassword) {
            return next(new HTTPError("Passwords do not match.", 422));
        }

        //Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        //Update user details in the database
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            name,
            email: email.toLowerCase(),
            password: hashedPassword
        }, { new: true });

        res.status(200).json(updatedUser);
        

   } catch (error) {
    return next(new HTTPError("User not found.", 404));
   }
}









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