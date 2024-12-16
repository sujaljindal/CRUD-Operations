import React, { useEffect, useState } from 'react';
import './Home.css';
import user from '../../assets/user.png';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Loading...');
  const [username, setUsername] = useState('');
  
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (username) {
      fetch(`http://localhost:8000/users?user=${username}`)
        .then(response => response.json())
        .then(data => {
          setName(data.name || 'No name available');
        })
        .catch(err => {
          console.error('Error fetching user data:', err);
          setName('Error fetching name');
        });
    }
  }, [username]);


  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
      navigate('/login');
    }
  };

  return (
    <div className="home">
      <div className="sidebar">
        <h1 className="titles">CRUD OPERATIONS</h1>
        <img className="user-img" src={user} alt="User Profile" />
        <h2 className="name">{username || 'Guest'}</h2>
        <h2 className="post">Admin</h2>
        <ul className="menu">
          <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
          <li><NavLink to="course" activeclassname="active">Course</NavLink></li>
          <li><NavLink to="students" activeclassname="active">Students</NavLink></li>
          <li><NavLink to="payment" activeclassname="active">Payment</NavLink></li>
          <li><NavLink to="report" activeclassname="active">Report</NavLink></li>
          <li><NavLink to="settings" activeclassname="active">Settings</NavLink></li>
        </ul>
        <button onClick={handleLogout} className="logout">LogOut</button>
      </div>

      <div className="container">        
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
