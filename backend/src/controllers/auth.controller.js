const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req,res,next) {
  try{
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserAlreadyExists) {
  if (isUserAlreadyExists.username === username) {
    return res.status(409).json({
      message: "Username already exists",
    });
  }


  if (isUserAlreadyExists.email === email) {
    return res.status(409).json({
      message: "Email already exists",
    });
  }
}

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);
   const userObj=user.toObject()
   delete userObj.password


  res.status(201).json({
    message: "User registed Successfully",
    user:userObj
  });
}
catch(error){
  next(error)
}
}

async function loginUser(req, res,next) {
  try{
  const { username, email, password } = req.body;

  const user = await userModel
    .findOne({ $or: [{ username }, { email }] })
    .select("+password");
  if (!user) {
    return res.status(401).json({ message: "User not exists" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Wrong Password" });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);

   const userObj=user.toObject()
    delete userObj.password
  res.status(200).json({
    message: "Logged In Successfully",
      user:userObj
  });
}catch(error){
  next(error)
}
}

async function logOutUser(req, res) {
  res.clearCookie("token");
  res.status(201).json({ message: "Logged Out Successfully" });
}


module.exports = { registerUser, loginUser, logOutUser};
