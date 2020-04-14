import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './Navbar';

const NavLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/join">New Chat</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/">Account</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

//   <Route path="/" exact component={Login} />
//   <Route path="/join" component={Join} />
//   <Route path="/chat" component={Chat} />
