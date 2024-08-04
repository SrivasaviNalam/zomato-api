const RestaurantModel = require('../model/RestaurantModel');
const MenuItemModel = require('../model/MenuItemModel');

const RestaurantController = {
	getRestaurantListByLocation: async (request,response) => {
		let { loc_id } = request.params;
		let result = await RestaurantModel.find({location_id: loc_id},{name:1,city:1,location_id:1,locality:1,image:1});
		response.send({
			call: true,
			result
		})
	},
	getSingleRestaurantDetails: async(request,response) => {
		let {res_id} = request.params;
		let result= await RestaurantModel.findOne({_id: res_id});
		response.send({
			call: true,
			result
		})
	},
	getMenuItems : async (request,response) => {
		let { id } = request.params;
		let result= await MenuItemModel.find({restaurantId: id});
		response.send({
			call: true,
			result
		})
	},
	filter: async(request,response) => {
		let { sort, location, cuisine, costForTwo } = request.body;
		let {minPrice,maxPrice}= costForTwo;
		let filterData = {};
		if (location !== null) filterData["location_id"] = location;
		if (cuisine.length !== 0) filterData["cuisine_id"] = { $in: cuisine };
		if (minPrice !== null && maxPrice !== null) {
            filterData["min_price"] = { $gte: minPrice , $lte: maxPrice }
        } else if (minPrice !== null) {
            filterData["min_price"] = { $gt: minPrice };
        } else if (maxPrice !== null) {
            filterData["min_price"] = { $lt: maxPrice };
        }
 		let result = await RestaurantModel.find(filterData).sort({
		  min_price: sort,
		});
		response.send({
			call: true,
			result
		})
	}
};

module.exports = RestaurantController;