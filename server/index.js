const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// Middleware
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// DB Connection
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.URL)
    .then(() => {
        // Server start
        console.log('DB is connected');
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })