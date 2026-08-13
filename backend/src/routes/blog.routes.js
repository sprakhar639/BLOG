const express=require('express');
const blogController=require('../controllers/blog.controller')
const authMiddleware=require('../middleware/auth.middleware')
const blogOwnerMiddleware=require('../middleware/blogOwner.middleware')
const {createValidation,updateValidation}=require('../validation/blog.validation')



const router=express.Router()


router.post("/",authMiddleware.authMiddleware,createValidation,blogController.createBlog)
router.get("/",authMiddleware.authMiddleware,blogController.getAllBlogs)
router.get("/:id",authMiddleware.authMiddleware,blogController.getBlogById)
router.put("/:id",authMiddleware.authMiddleware,updateValidation,blogOwnerMiddleware.blogOwnerUser,blogController.updateBlogById)
router.delete("/:id",authMiddleware.authMiddleware,blogOwnerMiddleware.blogOwnerUser,blogController.deleteBlogById)

module.exports=router