const validPasswordLength = 6;

async function addUser(userRegistrationData){
    validateUserRegistrationData (userRegistrationData);
}

function validateUserRegistrationData(userRegistrationData){
    if(userRegistrationData===null){
        throw new Error("Null user registration data");
    }

    if(userRegistrationData.password.length<validPasswordLength){
        throw new Error("password to short");
    }
}

module.exports = {
    addUser
}
