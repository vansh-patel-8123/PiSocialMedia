const routes = require('express').Router();

// controllers
const controllers = require('../controllers/AuthControllers');

routes.post('/register', controllers.registerUser);
routes.post('/login', controllers.loginUser);

module.exports = routes;