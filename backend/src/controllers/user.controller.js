const userModel = require("../models/user.model");

async function getMyProfile(req, res, next) {
  try {
    const user = await userModel.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(200).json({ message: "User Not Found" });
    }
    res.status(200).json({ messsage: "Got user", user });
  } catch (error) {
    next(error);
  }
}

module.exports = { getMyProfile, getUser };
