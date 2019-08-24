import React, { Component } from "react";
import ReactGA from "react-ga";

import { Link } from "react-router-dom";

import {NavStyle} from "./styles"


const routes = [ 
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/pricing', name: "Pricing"}
]


class Nav extends Component {
  

  render() {
    return (
     <NavStyle>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Oswald');
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
        </style>
        <div className="top-bar">
          <div className="container">
            
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
