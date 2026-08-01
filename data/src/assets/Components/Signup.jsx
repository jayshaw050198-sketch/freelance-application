import "./Signup.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
    const location = useLocation()
    const navigate = useNavigate()
    const [form, setForm] = useState({
    username: "",
    email: "",
    role: "",
  });

  const handleSignup =  async () =>{
    if(!form.username ||!form.email  || !form.role){
        alert('Please Enter All details 🎈')
        return
    }

    console.log(form.role)
    const response = await axios.post('http://localhost:3000/signup' , {
      Username:form.username,
      Email:form.email,
      Role:form.role
    })

    const message = response.data.message

    if(message == 'DataDone'){

    navigate('/Login/secure/user/nvsflkvhsflvahfvhevfshlvbfdsv/vsfvsevevsv' , {
        state:form.username
    })

    }


  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="signup-page">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <form className="signup-card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p>Join us today 🚀</p>
  <h3>Enter Username :</h3>


        <input
          type="text"
          placeholder="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />

  <h3>Enter Email :</h3>


        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
<label>
  <h3>Enter your Role :</h3>
</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option>None</option>
          <option>Clint</option>
          <option>Employee</option>
        </select>

        <button onClick={handleSignup} type="submit">Sign Up</button>

        <span>
          Already have an account? <a href="/Login/secure/user/nvsflkvhsflvahfvhevfshlvbfdsv/vsfvsevevsv">Login</a>
        </span>
      </form>
    </div>
  );
}