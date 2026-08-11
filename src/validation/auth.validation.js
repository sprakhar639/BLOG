function validationRegister(req,res,next){
    const {username,email,password}=req.body



if(!username || !email){
   return res.status(400).json({message:"Username and email is required"})
}

  if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({
            message: "Invalid email"
        });
    }
    
if(username.length<3){
    return res.status(400).json({message:"Username must be atleast more than 3 characters"})
}

if(username.length>8){
    return res.status(400).json({message:"Username must be less than 9 characters"})
}

if(!password){
    return res.status(400).json({message:"Password required"})
}

if(password.length<8){
    return res.status(400).json({message:"Minimum password length 8 character"})
}

next()

}

module.exports = { validationRegister };