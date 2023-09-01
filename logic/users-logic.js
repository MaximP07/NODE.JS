const validPasswordLength = 6;
const usersDal = require("../dal/users-dal");

async function addUser(userRegistrationData){
    validateUserRegistrationData (userRegistrationData);
    if(usersDal.isUserNameExist(userRegistrationData.userName)){
        throw new Error("User name alredy exist");
    }
   await usersDal.addUser(userRegistrationData);
}

async function getUserById(id){
    return usersDal.getUserById(id);
}

function validateUserRegistrationData(userRegistrationData){
    //same as (userRegistrationData===null)
    if(!userRegistrationData){
        throw new Error("Null user registration data");
    }

    if(!userRegistrationData.password){
        throw new Error("Null password");
    }

    if(userRegistrationData.password.length<validPasswordLength){
        throw new Error("password to short");
    }
}

//without this you will get an error that says that you does not have function
module.exports = {
    addUser,
    getUserById
}
