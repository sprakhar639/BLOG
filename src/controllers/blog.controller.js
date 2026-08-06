const blogModel=require('../models/blog.model')


async function createBlog(req,res){
   const{title,content}=req.body;

   const blog=await blogModel.create({title,content})

   res.status(201).json({
    message:"Blog Created Successfully",blog
   })
}

async function getAllBlogs(req,res){
    const blogs=await blogModel.find()
    res.status(201).json({
        message:"All blogs fetched successfully",
        blogs
    })
}

async function getBlogById(req,res){
    const {id}=req.params;
    const blog=await blogModel.findById(id)
    res.status(201).json({
        message:"Blog by id fetched successfully",
        blog
    })
}

async function updateBlogById(req,res){
    const {title,content}=req.body
    const {id}=req.params
    const blog=await blogModel.findByIdAndUpdate(id,{content},{new:true})
    res.status(201).json({
        message:"Blog Updated Successfully",
        blog
    })
}

async function deleteBlogById(req,res){
    const {id}=req.params
    const blog=await blogModel.findByIdAndDelete(id)
     if (!blog) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }
    res.status(200).json({
        message:"Blog deleted Successfully",
    })


}

module.exports={createBlog,getAllBlogs,getBlogById,updateBlogById,deleteBlogById}