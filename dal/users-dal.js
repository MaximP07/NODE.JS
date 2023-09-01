const connection = require("./connection-wrapper");

async function addUser(userRegistrationData){
    let sql = "insert into users(userName, password) values(?, ?)";
    let parameters = [userRegistrationData.userName, userRegistrationData.password];
    await connection.executeWithParameters(sql, parameters);
}

async function isUserNameExist(userName){
    let sql = "SELECT idusers from users where userName = ?";
    let parameters = [userName];
    let users = await connection.executeWithParameters(sql, parameters);

    if(users && users.length > 0){
        return true;
    }
    return false;

}

async function getUserById(id){
    let sql = 'SELECT idusers, userName, password from users WHERE idusers = ? ';
    let parameters = [id];
    let user = await connection.executeWithParameters(sql, parameters);
    return user;
}

module.exports = {
    addUser,
    isUserNameExist,
    getUserById
}













