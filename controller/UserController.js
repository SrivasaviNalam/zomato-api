//import UserModel
const UserModel = require('../model/UserModel');

const UserController = {
    userHome: (request,response)  => {
        response.send({
            status: true,
            message: "Welcome user"
        });
    },
    getUsersList: async (request,response) => {
        let {gender} = request.params;
        let result = await UserModel.find(
            {gender: {$regex : `^${gender}$`, $options: "i"}},
            {first_name:1,last_name:1,email:1,_id:0,gender:1}
        );
        response.send({
            status: true,
            list: result,
        })
    },
    saveUserData : async (request,response) => {
        let user = request.body;
        let saveData = {...user};
        let existingUser = await UserModel.findOne({mobile: saveData.mobile});
        if (existingUser) {
            response.send({
                call: false,
                message: "Given user has already an account with the given mobile number"
            })
        } else {
            let newUser = new UserModel(saveData);
            await newUser.save();
            response.send({
                call: true,
                message: "You registered successfully!!"
            })
        }
    },
    userLogin: async (request,response) => {
        let { username , password } = request.body;
        let isUserValid = await UserModel.findOne({mobile: username, password:password},{password:0});
        if(isUserValid) {
            response.send({
                call: true,
                user: isUserValid
            })
        }else{
            response.send({
                call: false
            })
        }
    }
}

module.exports = UserController;