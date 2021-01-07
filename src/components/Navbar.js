import React from 'react'

import {
  NavLink
} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav'>
      <ul>
          <NavItem to="/">Home</NavItem>
          {/*
          <NavItem to="/login">Login</NavItem>
          <NavItem to='/play'>Play</NavItem>
          */}
      </ul>
    </nav>
  );
}

function NavItem({ children, to }) {
  return (
    <li>
      <NavLink to={to} exact activeClassName='active'> {children} </NavLink>
    </li>
  );
   
}