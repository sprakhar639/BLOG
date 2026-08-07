const express=require('express')
const blogRoutes=require('./routes/blog.routes')
const authRouter=require('./routes/auth.routes')
const userRouter=require('./routes/user.routes')
const cookieParser = require("cookie-parser");


const app=express();
app.use(express.json())
app.use(cookieParser());

app.use('/api/blog',blogRoutes)
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

module.exports=app
