const routes = require('express').Router();

// controllers
const controllers = require('../controllers/PostControllers');

routes.get('/', controllers.getAllPost);
routes.get('/:userId',controllers.getAllUserPostsByUserID);
routes.get('/:postId', controllers.getSpecificPostByPostId);
routes.post('/', controllers.createPost);
routes.patch('/like/:postID', controllers.likeDislikeFeature);

module.exports = routes;