import React, { useState, useEffect } from "react";

import "./Clint.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Clint = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Email, setEmail] = useState("");
  const [post, setPost] = useState([]);
  const [Company , setCompany] = useState('')
``
  // const [image , setImage] = useState('')

  const addPost = async () => {
    try {
      const User = location.state?.Username;
      setUsername(User);
      const RealEmail = location.state?.Email;

      if(!title || !description){
        return alert('Please fill all the details')
      }

      const response = await axios.post("http://localhost:3000/Clint/Profile", {
        title: title,
        description: description,
        Email: RealEmail,
      });
      const message = response.data.message;

      alert("Post Added Succesfull ✅🎈");

      navigate(
        "/Clint/DashBoard/qwefvsefvws/wegbrtujuytlyuo/gmfthmdtymh/dtyn/dhn",
        {
          state: {
            Username: Username,
            Email: RealEmail,
          },
        },
      );
    } catch (err) {
      return alert("Error in Server");
    }
  };

  return (
    <div className="client-container">
      {/* Header */}

      <header className="profile-header">
        <div className="profile-info">
          <div className="profile-image">{location.state?.Username}</div>

          <div>
            <h1>{location.state.Username} Profile</h1>
            <p>Welcome back, {location.state.Username}</p>
          </div>
        </div>
      </header>

      {/* Client Details */}

      <section className="client-details">
        <div className="detail-card">
          <h3>Company</h3>
          <p>{Company}</p>
        </div>

        <div className="detail-card">
          <h3>Email</h3>
          <p>{location.state.Email}</p>
        </div>


      </section>

      {/* Add Post */}

      <section className="add-post">
        <h2>Add New Post</h2>

          <input
          type="text"
          placeholder="Enter Company Name , if Not Add"
          required
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Post Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter Description..."
          required
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          onClick={() => {
            console.log("Button Sach me click hua!");
            addPost();
          }}
        >
          Publish Post
        </button>

        <br />
      </section>

      {/* Posts */}

      {/* Footer */}

      <footer className="footer">
        © 2026 Client Management System | All Rights Reserved
      </footer>
    </div>
  );
};

export default Clint;
