//import mongoose
const mongoose = require('mongoose');

//create a schema
const UserSchema = new mongoose.Schema({
    "f_name": {type: String},
    "email": {type: String},
    "mobile": {type: Number},
    "password": {type: String},
    "address": {type: String}
});

//create a model
const UserModel = mongoose.model('user', UserSchema, 'users');

module.exports = UserModel;