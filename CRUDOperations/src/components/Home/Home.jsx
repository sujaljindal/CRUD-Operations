import React,{useEffect} from 'react';
import './Home.css';
import user from '../../assets/user.png';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  useEffect(()=>{
    if(!isAuthenticated)
      navigate('/login')
  },[])

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      navigate('/login');
    }
  };


  return (
    <div className="home">
      <div className="sidebar">
        <h1 className="title">CRUD OPERATIONS</h1>
        <img className="user-img" src={user} alt="User Profile" />
        <h2 className="name">Sujal Jindal</h2>
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
