const express=require('express')
const blogRoutes=require('./routes/blog.routes')
const userRouter=require('./routes/user.routes')

const app=express();
app.use(express.json())

app.use('/api/blog',blogRoutes)
app.use('/api/auth',userRouter)

module.exports=app
