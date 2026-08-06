const blogModel=require('../models/blog.model')


async function createBlog(req,res){
   const{title,content}=req.body;

   const blog=await blogModel.create({title,content})

   console.log(title);
   console.log(content);

   res.status(201).json({
    message:"Blog Created Successfully",blog
   })
}


module.exports={createBlog}