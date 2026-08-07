const express=require('express');
const blogController=require('../controllers/blog.controller')
const authMiddleware=require('../middleware/auth.middleware')



const router=express.Router()


router.post("/",authMiddleware.authMiddleware,blogController.createBlog)
router.get("/",authMiddleware.authMiddleware,blogController.getAllBlogs)
router.get("/:id",authMiddleware.authMiddleware,blogController.getBlogById)
router.put("/:id",authMiddleware.authMiddleware,blogController.updateBlogById)
router.delete("/:id",authMiddleware.authMiddleware,blogController.deleteBlogById)

module.exports=router