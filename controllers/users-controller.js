const express = require("express");
const usersLogic = require("../logic/users-logic");
const router = express.Router();

router.post("/", async (request, response, next) => {
    // Extracting the JSON from the packet's BODY
    let userRegistrationData = request.body;
    userRegistrationData.userType = 'Customer';

    try {
        await usersLogic.addUser(userRegistrationData);
        response.json();
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

module.exports = router;
