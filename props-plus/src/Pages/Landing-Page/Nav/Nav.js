import React, { Component } from "react";


import { Link } from "react-router-dom";

import {NavStyle} from "./styles"
import Logo from "../../../img/logo.png"


const routes = [ 
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/pricing', name: 'Pricing'}
]


class Nav extends Component {
  

  render() {
    return (
     <NavStyle>
        <div className="top-bar">
          <div className="container">
            <div className="Logo">
               <img src={Logo} alt=""/>
            </div>
            <div className="container-center">
              {routes.map(route => (
              <Link
                key={route.path}
                to={route.path}
                
              >
                {route.name}
              </Link>
            ))}
            </div>
          </div>
        </div>
      </NavStyle>
    );
  }
}

export default Nav;
