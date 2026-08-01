import React, { useState, useEffect } from "react";
import "./PostDashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewPosts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUsername = location.state?.Username || "Developer Core";
  const currentEmail = location.state?.Email || "dev@workspace.io";

  // Dynamic API Fetching logic ready hai
  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await axios.post('http://localhost:3000/Data',{
          Email:currentEmail
        },

      {
        withCredentials:true
      }
    )
        const data = res.data.Data
        setPosts(data)
        return
        
      } catch (err) {
        alert('error')

      }
    };


    fetchUserPosts();
  }, []);
useEffect(() => {
  // console.log(posts);
}, [])

  return (
    <div className="posts-dashboard">
      {/* Dynamic Header */}
      <nav className="posts-navbar">
        {/* <img src={location.state?.image} alt="" /> */}
        <div className="nav-info">
          <h2>{location.state?.Email} , Profile 🎈</h2>
          <p>Logged in as: <span className="highlight-email">{currentEmail}</span></p>
        </div>
      
      </nav>

      {/* Overview Analytics Banner */}
      <div className="analytics-strip">
        <div className="strip-item">
          <span className="strip-lbl">Total Feeds</span>
          <span className="strip-val">{posts.length} Active</span>
        </div>
        <div className="strip-item">
        </div>
      </div>

      {posts.map((user, index) => (
  <div className="premium-user-card" key={index}>
    {/* Background modern ambient light ring layer */}
    <div className="card-glow-overlay"></div>
    
    <div className="profile-id">
      <span className="profile-id">Posts Counts {user.Post}</span>
      <span className="status-indicator active"></span>
    </div>

    {/* Title Section: Username */}
    <div className="title-section">
      <span className="info-label">Title : </span>
      <h3 className="user-username">{user.Title}</h3>
    </div>

    {/* Description / Info Section: Email & Number */}
    <div className="description-section">
      <div className="info-row">
  
      </div>
      
      <div className="info-row">
        <span className="info-label">Descripition : </span>
        <span className="info-value">{user.Description}</span>
      </div>
      <br />
    </div>
  </div>

))}








      <footer className="posts-footer">
        <p>Terminal Protocol v4.01 // Secure Display Grid</p>
      </footer>
    </div>
  );
};

export default ViewPosts;