import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/register";
import Home from "./pages/home";
import BlogDetails from "./pages/blogDetails";
import EditBlog from "./pages/editBlog"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/blog/:id/edit" element={<EditBlog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;