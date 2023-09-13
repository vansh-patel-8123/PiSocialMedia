const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
}, {timestamps: true});

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {timestamps: true});

const postSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    picturePath: {
        type: String,
        required: true
    },
    likes: [ likeSchema ],
    comments: [ commentSchema ]
}, {timestamps: true});
module.exports = mongoose.model('Post', postSchema);