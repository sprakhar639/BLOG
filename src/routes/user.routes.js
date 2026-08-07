const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware=require('../middleware/auth.middleware')

const router = express.Router();

router.get("/myProfile",authMiddleware.authMiddleware,userController.getMyProfile);

module.exports = router;
