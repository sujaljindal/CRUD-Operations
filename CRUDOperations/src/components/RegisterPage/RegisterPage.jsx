import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

import './RegisterPage.css'

const RegisterPage = () => {
  const [user,setUser]=useState("");
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  const navigate=useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();
    let regobj={user,name,password,email,phone};
    fetch("http://localhost:8000/users",{
      method:"POST",
      headers:{'content-type':"application/json"},
      body:JSON.stringify(regobj)
    }).then((res)=>{navigate('/Login')})
  }
  return (
    <div>
      <div className="login-Page">
        <form onSubmit={handleSubmit} className="login-container">
            <h1 className='heading'>CRUD OPERATIONS</h1>
            <h2 className='sign'>CREATE ACCOUNT</h2>
            <p className='para'>Enter your details to create your account</p>
            <div className='form-sign' action="">
                <div className='user-name'>
                    <label htmlFor="username">Username</label>
                    <input value={user} onChange={e=>setUser(e.target.value)}className="username" type="text" placeholder='Enter Your Username' />
                </div>
                <div className='email-box'>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} className="email" type="email" placeholder='Enter Your Email' />
                </div>
                <div className='fullname' id='fullname'>
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={e=>setName(e.target.value)} className="name" type="text" placeholder='Enter Your Name' />
                </div>
                <div className='phone'>
                    <label htmlFor="phone">Phone no</label>
                    <input value={phone} onChange={e=>setPhone(e.target.value)} className="phone" type="text" placeholder='Enter Your Phone No.' />
                </div>
                <div className='pswd-box'>
                    <label htmlFor="pswd">Password</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)}className="pswd" type="password" placeholder='Enter Your Password' />
                </div>
                <button type='submit'>CREATE ACCOUNT</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
