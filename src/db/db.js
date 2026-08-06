require("dotenv").config();
const mongoose=require('mongoose')

async function connectDB(){
     try{
        console.log(process.env.MONGO_URI)
      await mongoose.connect(process.env.MONGO_URI)
      console.log("Database Connected")
     }
     catch(error){
       console.error("Database Connection failed",error)
       process.exit(1)
     }
     
}


module.exports=connectDB