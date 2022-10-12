import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        
        <ul className="nav">
  <li className="nav-item">
    <Link className='nav-link' to="/home">Home</Link>
  
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="/todo">To-Do List</Link>
    
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="register">Registration</Link>      
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="login">Login</Link>      
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="calculator">Calculator</Link>      
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="fetch">FetchApi</Link>      
  </li>
</ul>
    </div>
  )
}
