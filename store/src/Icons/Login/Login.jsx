import React from 'react'
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
import '../Login/Login.css';
const Login = () => {
  
  return (
    <div className='login_icon' >
      <Link to = "/login"><IoPerson/></Link>
      </div>
  )
}

export default Login