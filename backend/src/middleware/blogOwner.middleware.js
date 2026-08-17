const blogModel = require("../models/blog.model");

async function blogOwnerUser(req, res, next) {
  const blogId = req.params.id;
  const userId = req.user.id;
  const blogDetails = await blogModel.findById(blogId);
  console.log(userId)
  console.log(blogDetails.author)
  if (userId.toString() !== blogDetails.author.toString()) {
    const errorMessage = getErrorMessage(req);
    return res.status(403).json({ errorMessage });
  }
  next();
}

function getErrorMessage(req) {
  switch (req.method) {
    case "DELETE": {
      return "You cannot delete this blog";
    }
    case "PUT": {
      return "You cannot update this blog";
    }
  }
}

module.exports = { blogOwnerUser };
