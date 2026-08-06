const express=require('express');
const blogController=require('../controllers/blog.controller')


const router=express.Router()


router.post("/",blogController.createBlog)
module.exports=router