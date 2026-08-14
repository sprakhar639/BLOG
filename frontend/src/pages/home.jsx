import { useEffect, useState } from "react";
import api from "../api/axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await api.get("/blog/");
        console.log("API RESPONSE:", response.data);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.log(error);
      }
    };

    getBlogs();
  }, []);

  return (
    <div>
      <h1>All Blogs</h1>

      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;