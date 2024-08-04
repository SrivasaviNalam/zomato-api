const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    _id:{type: mongoose.Schema.Types.ObjectId},
    name:{type: String},
    description:{type: String}, 
    ingridients:{type: Array},
    restaurantId: {type: mongoose.Schema.Types.ObjectId},
    image:{type: String},
    qty:{type: Number},
    price:{type: Number}
});

const MenuItemModel = mongoose.model('menuitems',MenuItemSchema,"menuitems");

module.exports = MenuItemModel;
