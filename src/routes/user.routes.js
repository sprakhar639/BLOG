const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware=require('../middleware/auth.middleware')

const router = express.Router();

router.get("/me",authMiddleware.authMiddleware,userController.getMyProfile);
router.get("/:id",authMiddleware.authMiddleware,userController.getUser);

module.exports = router;
