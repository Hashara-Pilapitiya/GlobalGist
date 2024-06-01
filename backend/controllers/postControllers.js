const Post = require('../models/postModel.js');
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const HTTPError = require("../models/errorModel.js");
const User = require("../models/userModel.js");



//Create a post
const createPost = async (req, res, next) => {
    try {
        const { title, category, description } = req.body;
        if (!title || !category || !description || !req.files) {
            return next(new HTTPError("All fields are required, please fill them and choose thumbnail.", 422));
        }

        const { thumbnail } = req.files;

        //Check the file size
        if (thumbnail.size > 2000000) {
            return next(new HTTPError("File size should not be more than 2MB", 400));
        }

        let fileName = thumbnail.name;
        let splittedFileName = fileName.split(".");
        let newFileName = uuid() + "." + splittedFileName[0] + splittedFileName[splittedFileName.length - 1];
        thumbnail.mv(path.join(__dirname, "..", "/uploads", newFileName), async (err) => {
            if (err) {

                return next(new HTTPError("File upload failed, please try again", 500));

            } else {

                const newPost = await Post.create({
                    title,
                    category,
                    description,
                    thumbnail: newFileName,
                    creator: req.user.id,
                });

                if (!newPost) {
                    return next(new HTTPError("Post creation failed, please try again", 422));
                }

                //Find user and increment post count by 1
                const currentUser = await User.findById(req.user.id);
                const userPostCount = currentUser.posts + 1;
                await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });

                res.status(201).json(newPost);

            }

        });

    } catch (error) {
        return next(new HTTPError("Post creation failed, please try again", 422));
    }
}









//Get all posts
const getPosts = async (req, res, next) => {
    res.json("Get all posts");
}








//Get a post
const getPost = async (req, res, next) => {
    res.json("Get a post");
}








//Get posts by category
const getPostsByCategory = async (req, res, next) => {
    res.json("Get posts by category");
}








//Get posts by author/user
const getPostsByAuthor = async (req, res, next) => {
    res.json("Get posts by author");
}








//Update a post
const editPost = async (req, res, next) => {
    res.json("Update a post");
}








//Delete a post
const deletePost = async (req, res, next) => {
    res.json("Delete a post");
}


module.exports = {
    createPost,
    getPosts,
    getPost,
    getPostsByCategory,
    getPostsByAuthor,
    editPost,
    deletePost
}   

