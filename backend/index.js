const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;


// Connect to MongoDB
mongoose
    .connect(MONGO_URL)
    .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`);
    });
    })
    .catch((error) => {
    console.log("Error connecting to MongoDB : ", error.message)
});
    



 

