import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/">Home</Link>
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
