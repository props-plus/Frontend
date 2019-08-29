
import React from "react";

import { Link } from "react-router-dom";

import { NavStyle } from "./styles";

import Login from "../../../Components/Auth/Login.js";

import Logo from "../../../img/logo.png";

function Nav() {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/pricing", name: "Pricing" }
  ];

  return (
    <NavStyle>
      <div className="top-bar">
        <div className="container">
        <div>
        <img src={Logo} alt=""/>
      </div>
          <div className="container-center">
            {routes.map(route => (
              <Link key={route.path} to={route.path}>
                {route.name}
              </Link>
            ))}
            <Login />
          </div>
        </div>
      </div>
    </NavStyle>
  );
}

export default Nav;
