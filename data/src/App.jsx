import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Components/Home.jsx';
import Login from './assets/Components/Login.jsx'
import Signup from './assets/Components/Signup.jsx';
import Clint from './assets/Components/Clint.jsx';
import PostDashboard from './assets/Components/PostDashboard.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/Home/Users/Secure' element={<Home />} />
        <Route path='/' element={<Signup />} />
        <Route path='/Login/secure/user/nvsflkvhsflvahfvhevfshlvbfdsv/vsfvsevevsv' element={<Login/>} />
        <Route path='/Clint/secure/user/nvsflkvhsflvahfvhevfshlvbfdsv/' element={<Clint />} />
        <Route path='/Clint/DashBoard/qwefvsefvws/wegbrtujuytlyuo/gmfthmdtymh/dtyn/dhn' element={<PostDashboard />} />


      </Routes>
    </div>
  );
};

export default App;