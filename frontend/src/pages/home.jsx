import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import api from "../api/axios";
import { Link } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await api.get("/blog/");
        setBlogs(response.data.blogs);
      } catch (error) {
        alert(error.response?.data?.message || error.message);
      }
    };

    getBlogs();
  }, []);



    
const navigate=useNavigate()
    const handleLogout = async () => {
  try {
    const response =await api.post("/auth/logout");
    alert(response.data.message)
    navigate("/login");
  } catch (error) {
   alert(error.response?.data?.message || error.message);
  }
};


  return (
    <div>
      <h1>All Blogs</h1>

      {blogs.map((blog) => (
        <div key={blog._id}>
          <Link to={`/blog/${blog._id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>{blog.content}</p>
        </div>
      ))}
    <Link to="/MyProfile"><button>Profile</button></Link>
    <Link to ="/CreateBlog"><button>Create Blog</button></Link>
       <button onClick={handleLogout}>
  Log Out
</button>

    </div>
  );
}

export default Home;