import api from '../api/axios'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'




function BlogDetails(){
    const {id} = useParams();


    const [blog,setBlog]=useState(null);

    useEffect(()=>{
        const fetchBlog=async()=>{
            try{
                const response=await api.get(`/blog/${id}`);
                console.log(response.data.blog)
                setBlog(response.data.blog);
            }
            catch(error){
                console.log(error);
            }
        };
        fetchBlog();
    },[id]);

    if(!blog){
        return <h2>Loading...</h2>
    }
  

  return (
    <div>
      <h1>Blog Details</h1>
      {/* <p>BLog ID:{id}</p> */}
      <p>BLog Title:{blog.title}</p>
      <p>BLog Content:{blog.content}</p>
      <p>BLog Author:{blog.author.username}</p>
    </div>
  );
}

export default BlogDetails;