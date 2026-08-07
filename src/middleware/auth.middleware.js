const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  console.log(req.cookies);

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "unauthorized error",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    console.log("current logged in user",req.user);
    next();
  } catch (error) {
    console.error(error);
  }
}

module.exports = { authMiddleware };
