const express = require('express');
const app = express();
const dbConnection = require('./config/connect');
require('dotenv').config();


// Routes Import
const AuthRoutes = require('./routes/AuthRoutes');
const PostRoutes = require('./routes/PostRoutes');
const UserRoutes = require('./routes/UserRoutes');


// DB & PORT
const PORT = process.env.PORT || 8888;
dbConnection(process.env.MongoURL);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Routes
app.use('/auth', AuthRoutes);
app.use('/user', UserRoutes);
app.use('/post', PostRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})