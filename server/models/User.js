const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    picturePath:{
        type: String,
        required: true,
    },
    friends:[ friendsSchema ],
    location: {
        type: String,
        required: true
    },
    occupation: {
        type: String
    },
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);