const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getMyProfile(req, res) {
  console.log({ req });
  const _id = req.user.id;
  const user = await userModel.findOne({
    $or: [{ _id }],
  });
  console.log({ user });

   const userObj=user.toObject()
        delete userObj.password
        res.status(200).json({
            user:userObj
        })
}


module.exports = { getMyProfile };
