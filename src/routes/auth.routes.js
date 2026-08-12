const express = require("express");
const userController = require("../controllers/auth.controller");
const {validationRegister,validationLogin}=require("../validation/auth.validation")

const router = express.Router();

router.post("/register",validationRegister,userController.registerUser);
router.post("/login", validationLogin,userController.loginUser);
router.post("/logout", userController.logOutUser);
router.get("/:id", authMiddleware.authMiddleware,userController.getUser);

module.exports = router;

