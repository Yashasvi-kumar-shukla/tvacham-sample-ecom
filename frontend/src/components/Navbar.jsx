import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItemCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Tvaćham
      </Link>
      <div className="nav-links">
        <NavLink to="/" end>Shop</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {/* 3. Display the real cart count */}
        <NavLink to="/cart">Cart ({cartItemCount})</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;