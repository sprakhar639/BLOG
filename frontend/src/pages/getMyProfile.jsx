import { useState, useEffect } from "react";

function MyProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/user/me", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data =>setUser(data.user))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
  <p>{user?.username}</p>
     <p>{user?.email}</p>
     </>
  )}

export default MyProfile;