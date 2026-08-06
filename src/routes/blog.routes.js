const express=require('express');
const blogController=require('../controllers/blog.controller')


const router=express.Router()


router.post("/",blogController.createBlog)
router.get("/",blogController.getAllBlogs)
router.get("/:id",blogController.getBlogById)
router.put("/:id",blogController.updateBlogById)
router.delete("/:id",blogController.deleteBlogById)
module.exports=router