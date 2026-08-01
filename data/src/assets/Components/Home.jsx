import React, { useEffect, useState } from "react";
import "./Home.css"; // Importing your dedicated styling file
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const employees = [
    {
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=52",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=48",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=65",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=24",
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [Clintss, setClintss] = useState([]);
  const [ClintPost, setClintPost] = useState([]);
  // Dynamic State Hub

  const fetch = async () => {
    const rees = await axios.post("http://localhost:3000/ClintPage");
    const Clint = rees.data.result;
    setClintss(rees.data.result);
    return;
  };

  const resClint = async () => {
    const res = await axios.get("http://localhost:3000/Clint/Data");
    const ClintPost = res.data.ClintPost;
    setClintPost(ClintPost)
  };
  useEffect(() => {
    resClint();
    console.log(ClintPost);
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    console.log("State", Clintss);
  }, [Clintss]);

  return (
    <div className="dashboard-container">
      {/* Background Neon Elements */}
      <div className="glow-ambient-cyan" />
      <div className="glow-ambient-violet" />

      {/* Header View */}
      <header className="dashboard-header">
        <div>
          <h1 className="brand-title">Hello , {location.state.Username} 🎈</h1>
          <p className="subtitle">Now , You are a Part of Us</p>
        </div>

        <div className="search-wrapper"></div>
      </header>

      {/* Core Operational Matrix Grid */}
      <main className="dashboard-grid">
        <div className="main-content-stream">
          {/* Dynamic Metric Framework */}
          <div className="metrics-row"></div>
        </div>

        {/* Informational Feed Panel */}

        <h2 className="hub-title">1. Clint's</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="user-container">
              {Clintss.map((user, index) => (
                <div className="user-card" key={index}>
                  <h3>{user.Username}</h3>
                  <p>
                    <strong>Email:</strong> {user.Email}
                  </p>
                  <p>
                    <strong>Number:</strong> {user.number}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="activity-item"></div>
        </div>
      </main>
      <h1>Clint's Post's :</h1>


      <div className="premium-grid-container">
      {ClintPost.map((item , idx) => (
        <div key={idx} className="premium-card">
          <div className="card-header">
            <h3 className="card-title">{item.Title}</h3>
            <span className="post-badge">
              <span className="badge-count">{item.Post}</span> posts
            </span>
          </div>


          
          <div className="card-body">
            <div className="info-row">
              <span className="info-label">Email :</span>
              <span className="info-value email-text">{item.Email}</span>
            </div>
            <span className="info-label">Descripition  :</span>
            <p className="card-description">{item.Description}</p>
          </div>
          
          <div className="card-footer-glow" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
