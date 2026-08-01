import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const [Message, setMessage] = useState("");

  // 1. Sirf ek hi function rakhenge jo form submit ko handle karega
  const handleSubmit = async (e) => {
    e.preventDefault(); // Yeh page ko refresh hone se rokega, jo sabse zaroori hai
  };

  const btn = async () => {
    if (!Username || !Email) {
      alert("Please fill details");
      return;
    }

    if (!Email.includes("@gmail.com")) {
      alert("Wrong Email");
      return;
    }
   

    try {
      const res = await axios.post("http://localhost:3000/admin/users/login", {
        Username: Username,
        Email: Email,
        Role: Role,
        
      }, 

      {
        withCredentials:true
      }
    
    
    );

      console.log(res.data.message);
       console.log("Sending data to backend...");

      const message = res.data.message;
      setMessage(message)

      if(message == 'User Not Exist Please Sign up First'){
        alert(message)
        return
      }

      if (message === 'Employee') {
        navigate("/Home/Users/Secure", {
          state: {
            Username: Username,
          },
        });
      }

      if(message === 'Clint'){
        

        console.log('backend' , message)
        navigate('/Clint/secure/user/nvsflkvhsflvahfvhevfshlvbfdsv/',{
         state: {
            Username: Username,
            Email:Email,
          },
        })
      }

    } catch (error) {
      console.log("Error in API or Navigation:", error);
      alert("SomeThing is Wrong Try Later");
      alert('You give some wrong input ')
      return
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back {location.state} 🎈 Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="on"
              value={Username}
            />
            <label>Username</label>
            <span className="input-line"></span>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="on"
              value={Email}
            />
            <label>Email Address</label>
          </div>
          <div className="input-group">
            <select
              name="role"
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option>None</option>
              <option>Clint</option>
              <option>Employee</option>
            </select>
          </div>
          <button className="glow-btn" onClick={btn}>
            Go
          </button>
          <h1>{Message}</h1>
          <h1>{Role}</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;