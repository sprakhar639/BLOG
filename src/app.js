const express=require('express')
const blogRoutes=require('./routes/blog.routes')

const app=express();
app.use(express.json())

app.use('/api/blog',blogRoutes)

module.exports=app
