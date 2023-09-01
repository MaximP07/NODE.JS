const express = require("express");

const router = express.Router();

router.post("/", async (request, response, next) => {
 const user = request.body;
 console.log(user);   
 response.json();
})

module.exports = router;
