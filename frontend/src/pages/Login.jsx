import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

function Login() {
    const navigate =useNavigate()
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async (event)=> {
    event.preventDefault();
  try {
    const data=identifier.includes("@")?{email:identifier,password}:{username:identifier,password};
    const response = await api.post("/auth/login",data);
    alert(response.data.message);
    navigate("/")
  } catch (error) {
    alert(error.response?.data?.message || error.message);
  }
};

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username or Email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <p>
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;