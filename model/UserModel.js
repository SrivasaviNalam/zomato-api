//import mongoose
const mongoose = require('mongoose');

//create a schema
const UserSchema = mongoose.Schema({
    "id":Number,
    "first_name": String,
    "last_name": String,
    "email": String,
    "gender": String
});

//create a model
const UserModel = mongoose.model('user', UserSchema, 'users');

module.exports = UserModel;