import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both username and password are required.');
      console.log('Both username and password are required.');
      return;
    }

    fetch(`http://localhost:8000/users?user=${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user data.');
        }
        return res.json();
      })
      .then((data) => {
        if (data.length === 0) {
          setError('User not found.');
          console.log('User not found.');
          return;
        }

        const user = data[0]; 
        if (user.password === password) {
          localStorage.setItem('isAuthenticated', true);
          navigate('/'); 
          console.log('Successfully logged in.');
        } else {
          setError('Invalid password.');
          console.log('Invalid password.');
        }
      })
      .catch((error) => {
        setError('Login failed: ' + error.message);
        console.log('Login failed:', error);
      });
  };

  return (
    <div>
      <div className="login-Page">
        <form onSubmit={ProceedLogin} className="login-container">
          <h1 className="heading">CRUD OPERATIONS</h1>
          <h2 className="sign">SIGN IN</h2>
          <p className="para">Enter your credentials to access your account</p>
          <div className="form-sign" action="">
            <div className="username">
              <label htmlFor="username">Username:</label>
              <input
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="username"
                type="text"
                placeholder="Enter Your Username"
              />
            </div>
            <div className="pswd-boxs">
              <label htmlFor="pswd">Password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pswd"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <button type="submit">SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
