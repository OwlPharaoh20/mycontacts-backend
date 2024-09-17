const express = require("express");
const { registerUser, 
    loginUser,
     currentUser,
     } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();


//Create user register endPoint
router.post("/register", registerUser);


//Create user login endPoint
router.post("/login", loginUser);


//Create user current endPoint
router.get("/current", validateToken, currentUser);

module.exports = router;