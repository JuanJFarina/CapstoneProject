import React from 'react'
import { Link } from 'react-router-dom'
import basket from '../assets/Basket.svg'

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-item clickable">Home</Link>
      <a href="#" className="nav-item clickable">About</a>
      <a href="#" className="nav-item clickable">Menu</a>
      <Link to="/booking" className="nav-item clickable">Reservations</Link>
      <a href="#" className="nav-item clickable">Order online</a>
      <a href="#" className="nav-item"><img src={basket} className="basket"></img></a>
    </nav>
  )
}

export default Nav;