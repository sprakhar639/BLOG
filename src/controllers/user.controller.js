const userModel = require("../models/user.model");

async function getMyProfile(req, res) {

 
  const user = await userModel.findById(req.user.id);

   if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

   const userObj=user.toObject()
        delete userObj.password
        res.status(200).json({
            user:userObj
        })
}


module.exports = { getMyProfile };
