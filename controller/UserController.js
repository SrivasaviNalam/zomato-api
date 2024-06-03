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
        let newUser = new UserModel(saveData);
        let result = await newUser.save();
        //let result = await UserModel.create(saveData);
        response.send({
            call: true,
            result
        })
    },
    userLogin: async (request,response) => {
        let { username , password } = request.body;
        let isUserValid = await UserModel.findOne({email: username, password:password},{password:0});
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