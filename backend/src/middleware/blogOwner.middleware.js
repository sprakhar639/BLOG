const blogModel = require("../models/blog.model");

async function blogOwnerUser(req, res, next) {
  const blogId = req.params.id;
  const userId = req.user.id;
  const blogDetails = await blogModel.findById(blogId);
  if (userId !== blogDetails.author) {
    const errorMessage = getErrorMessage(req);
    return res.status(401).json({ errorMessage });
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
