const AppRouter = require('express').Router();
const UserController = require('../controller/UserController');
const LocationController = require('../controller/LocationController');
const RestaurantController = require('../controller/RestaurantController');
const MealTypeController = require("../controller/MealTypeController");

AppRouter.get("/",UserController.userHome);
AppRouter.get("/get-users-list/:gender",UserController.getUsersList);
AppRouter.get("/get-location-list",LocationController.getLocationList);
AppRouter.get("/get-restaurant-list-by-loc-id/:loc_id",RestaurantController.getRestaurantListByLocation);
AppRouter.get("/get-meal-type-list",MealTypeController.getMealTypeList);
AppRouter.get("/get-single-restaurant-by-res-id/:res_id",RestaurantController.getSingleRestaurantDetails);

//save data
AppRouter.post("/send-user-data", UserController.saveUserData);
AppRouter.post("/login", UserController.userLogin);
AppRouter.post("/filter", RestaurantController.filter);

module.exports = AppRouter ;