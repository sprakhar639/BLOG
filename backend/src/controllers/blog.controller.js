const blogModel = require("../models/blog.model");

async function createBlog(req, res, next) {
  try {
    const { title, content } = req.body;
    const author = req.user.id;
    const blog = await blogModel.create({ title, content, author });

    res.status(201).json({
      message: "Blog Created Successfully",
      blog,
    });
  } catch (error) {
    next(error);
  }
}

async function getAllBlogs(req, res, next) {
  try {
    const blogs = await blogModel.find();
    res.status(200).json({
      message: "All blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    next(error);
  }
}

async function getBlogById(req, res, next) {
  try {
    const { id } = req.params;

    const blog = await blogModel.findById(id).populate("author","username");

    if (!blog) {
      return res.status(404).json({ message: "Cannot find blog" });
    }
    res.status(200).json({
      message: "Blog by id fetched successfully",
      blog,
    });
  } catch (error) {
    next(error);
  }
}

async function updateBlogById(req, res, next) {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true },
    );

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    res.status(200).json({
      message: "Blog Updated Successfully",
      blog,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteBlogById(req, res, next) {
  try {
    const { id } = req.params;
    console.log("Deleting blog id:", id);
    const blog = await blogModel.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    res.status(200).json({
      message: "Blog deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
