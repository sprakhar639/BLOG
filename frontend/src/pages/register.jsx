import {useState} from 'react'
import api from '../api/axios'
import {Link,useNavigate} from 'react-router-dom'

function Register(){
  const navigate =useNavigate()
    const [email,setEmail]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")


  const handleRegister=async(event)=>{
    event.preventDefault();
    try{
       const  response=await api.post("/auth/register",{email,username,password});
       alert(response.data.message);
       navigate("/")
    }
    catch(error){
        alert(error.response?.data?.message || error.message);
  
    }
  }



  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) =>  setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
        <p>Login 
        <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
export default Register;


