const userModel=require('../models/user.model')
const bcrypt=require("bcryptjs")


async function registerUser(req,res){
       const {username,email,password}=req.body

       const isUserAlreadyExists=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
       })
       if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User Already Exist"})
       }

       const hash= await bcrypt.hash(password,10)

       const user=await userModel.create({
        username,
        email,
        password:hash,
       })

       res.status(201).json({
        message:"User registed Successfully",user
       })
}

module.exports={registerUser}