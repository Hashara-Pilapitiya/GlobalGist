const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const upload = require('express-fileupload');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');


const app = express();
dotenv.config();


// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(upload());
app.use('/uploads', express.static(__dirname + '/uploads'));


const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;


// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);


// Connect to MongoDB
mongoose
    .connect(MONGO_URL)
    .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}` || 5000);
    });
    })
    .catch((error) => {
    console.log("Error connecting to MongoDB : ", error.message)
});
    



 

