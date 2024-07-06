const RestaurantModel = require('../model/RestaurantModel');

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
	filter: async(request,response) => {
		let result= await RestaurantModel.find();
		response.send({
			call: true,
			result
		})
	}
};

module.exports = RestaurantController;