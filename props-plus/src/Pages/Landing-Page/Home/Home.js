import React, { Component } from "react";
import ReactGA from "react-ga";

import Nav from "../Nav/Nav";

class Home extends Component {
  initializeReactGA() {
    ReactGA.initialize("UA-146126284-1"); //Tracking ID
    ReactGA.pageview("/homepage"); //Name of the page being
  }

  componentDidMount() {
    this.initializeReactGA(); //When ever componentDidMount event is triggered.
  }

  render() {
    return (
      <div>
        <Nav />
       
      </div>
    );
  }
}

export default Home;
