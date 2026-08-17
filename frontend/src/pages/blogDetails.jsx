import api from "../api/axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [user, setuser] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogresponse = await api.get(`/blog/${id}`);
        setBlog(blogresponse.data.blog);

        const userresponse = await api.get(`./user/me`);
        setuser(userresponse.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog ||!user) {
    return <h2>Loading...</h2>;
  }

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/blog/${id}`);
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.errorMessage || error.message);
    }
  };

  return (
    <div>
      <h1>Blog Details</h1>
      {/* <p>BLog ID:{id}</p> */}
      <p>BLog Title:{blog.title}</p>
      <p>BLog Content:{blog.content}</p>
      <p>BLog Author:{blog.author.username}</p>
      {user._id === blog.author._id &&(
          <>
            <button onClick={() => navigate(`/blog/${blog._id}/edit`)}>
              Edit Blog
            </button>
            <button onClick={handleDelete}>Delete Blog</button>
          </>
        )}
    </div>
  );
}

export default BlogDetails;
