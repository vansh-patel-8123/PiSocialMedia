const routes = require('express').Router();

// controllers
const controllers = require('../controllers/UserControllers');

routes.get('/:id', controllers.userDetailsByUserID);
routes.get('/:id/friends', controllers.getUsersFriendByUserID);
routes.post('/:friendID', controllers.addRemoveFriendFeature);

module.exports = routes;