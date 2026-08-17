import {useEffect,useState} from "react"
import { useNavigate,useParams } from "react-router-dom";
import api from "../api/axios"




function editBlog() {
  const {id}=useParams()
  const navigate=useNavigate();

    const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

 useEffect(()=>{
  const fetchBlog =async ()=>{
    try{
    const response=await api.get(`/blog/${id}`)
    const blog=response.data.blog
    setTitle(blog.title);
    setContent(blog.content)
    }
    catch(error){
        alert(error.response?.data?.message || error.message);
    }
 }
fetchBlog();
},
[id]);

const handleUpdate=async(event)=>{
  event.preventDefault();

  try{
    await api.put(`/blog/${id}`,{
      title,content,
    });
    navigate(`/blog/${id}`);
  }catch(error){
    alert(error.response?.data?.errorMessage || error.message)
  }
};
return (
  <div>
    <h1>Edit Blog</h1>

    <form onSubmit={handleUpdate}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />


      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">
        Update Blog
      </button>
    </form>
  </div>
);
}



export default editBlog;
