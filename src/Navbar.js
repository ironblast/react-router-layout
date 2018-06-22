import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
	<nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/user/1">User</Link></li>
    </ul>
  </nav>
)

export default Navbar
