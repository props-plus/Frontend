
import React from "react";

import { NavLink, Link } from "react-router-dom";

import Login from "../../../Components/Auth/Login.js";

import Logo from "../../../img/logo.png";

import './nav.css'

function Nav() {


  const routes = [
    { path: "/", name: "Home" },
    { path: "/pricing", name: "Pricing" },
    { path: "/about-us", name: "About us" },
    { path: "/contact", name: "Contact" }

  ];

  return (
    <div className='navContainer'>
      <div className='logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='navBar'>
        <nav>
          <NavLink className='active'>Home</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>About us</NavLink>
          <NavLink>Contact</NavLink>
        </nav>
      </div>
      <div className='loginButton'>
        <Link>Login</Link>
      </div>
    </div>
  );
}

export default Nav;
