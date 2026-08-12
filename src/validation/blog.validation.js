function contentValidation(req,res,next){
      const {content}=req.body
     if (!content || !content.trim()){
        return res.status(400).json({message:"Blog content cannot be empty"})
     }
     if(content.trim().length<10){
        return res.status(400).json({message:"content must be at least 10 characters"})
     }
     next()
}


function updateValidation(req,res,next){
    const {content,title}=req.body

    if(content!==undefined){
        if(!content.trim().length){
            return res.status(400).json({message:"Content cannot be empty"})
        }
        if(content.trim().length<10){
           return res.status(400).json({message:"Content must be atleast 10 chatacters"})
        }
    }

    if(title!==undefined){
        if(!title.trim().length){
            return res.status(400).json({message:"Title cannot be empty"})
        }
        if(title.trim().length<5){
            return res.status(400).json({message:'Title should be atleast 5 Characters'})
        }
    }
    next()
}

module.exports={contentValidation,updateValidation}