import { useState, useEffect } from "react";
import api from '../api/axios'

function MyProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {

const fetchBlog =async ()=>{

    const response = await api.get("/user/me");
setUser(response.data.user);
}
  fetchBlog();}, []);

  return (
    <>
  <p>{user?.username}</p>
     <p>{user?.email}</p>
     </>
  )}

export default MyProfile;