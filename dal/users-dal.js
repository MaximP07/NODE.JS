const connection = require("./connection-wrapper");

async function addUser(userRegistrationData){
    let sql = "insert into users(userName, password) values(?, ?)";
    let parameters = [userRegistrationData.userName, userRegistrationData.password];
    await connection.executeWithParameters(sql, parameters);
}

module.exports = {
    addUser
}













