const mongoose = require('mongoose');

const LocationScheme = new mongoose.Schema({
  name: { type: String },
  city_id: { type: Number },
  location_id: { type: Number },
  city: { type: String },
  country_name: { type: String }
});

const LocationModel = mongoose.model('location',LocationScheme,'locations');

module.exports = LocationModel;