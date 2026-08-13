const express = require("express");
const userController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware")
const {validationRegister,validationLogin}=require("../validation/auth.validation")


const router = express.Router();

router.post("/register",validationRegister,userController.registerUser);
router.post("/login", validationLogin,userController.loginUser);
router.post("/logout", userController.logOutUser);


module.exports = router;

