import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-item">Home</Link>
      <a href="#" className="nav-item">About</a>
      <a href="#" className="nav-item">Menu</a>
      <Link to="/booking" className="nav-item">Reservations</Link>
      <a href="#" className="nav-item">Order online</a>
      <a href="#" className="nav-item">Login</a>
    </nav>
  )
}

export default Nav;