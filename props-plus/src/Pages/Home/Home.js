import React, { Component } from "react";
import ReactGA from "react-ga";

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
      <div className="App">
        <h1>Soon...</h1>
        <p>Be patient, it's coming.....</p>
      </div>
    );
  }
}

export default Home;
