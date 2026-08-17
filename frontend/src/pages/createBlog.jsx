import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../api/axios'


function createBlog(){
const navigate=useNavigate()
const [title,setTitle]=useState("")
const [content,setContent]=useState("")


const handleCreate=async(event)=>{
    event.preventDefault()
    try{
        const response=await api.post('/blog/',{title,content})
        navigate("/")
    }
    catch(error){
        console.log(error)
    }
}


return (
    <div>
    <h1>Create Blog</h1>
    <form onSubmit={handleCreate}>
        <div>
        <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        </div>
 
          
        <div>
         <input
        type="text"
        placeholder="Blog Content"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        />
        </div>
        <button type="submit">Submit Blog</button>
    </form>
    </div>
)
}

export default createBlog

