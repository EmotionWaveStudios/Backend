const User = require('../model/userModel');

const getAllUser = async(req, res)=>{
    let users;

    try{
        users = User.find();
        if(!users){
            return res.status(404).json({message: 'No data found'});
        }
        if(users){
            return res.status(200).json(users);
        }
    }
    catch(err){
        console.log(err);
    }
};

module.exports = { getAllUser };