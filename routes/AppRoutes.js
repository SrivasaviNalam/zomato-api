const AppRouter = require('express').Router();
const UserController = require('../controller/UserController');

AppRouter.get("/",UserController.userHome);
AppRouter.get("/get-users-list/:gender",UserController.getUsersList);

module.exports = AppRouter ;