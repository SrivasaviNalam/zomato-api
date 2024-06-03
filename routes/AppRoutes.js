const AppRouter = require('express').Router();
const UserController = require('../controller/UserController');

AppRouter.get("/",UserController.userHome);
AppRouter.get("/get-users-list/:gender",UserController.getUsersList);
AppRouter.post("/send-user-data", UserController.saveUserData);
AppRouter.post("/login", UserController.userLogin);

module.exports = AppRouter ;