import React, { Component } from "react";
import ReactGA from "react-ga";

import Nav from "../Nav/Nav";
import jumbtron from '../../../img/jumbotron.jpg'

import './home.css'

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
      <div className='container'>
        <img className='jumbotron' src={jumbtron} />
        <Nav />
        <div className='mainHeader'>
          <h1>
            People pushing <span>positivity.</span>
            <br />
            <span>Motivate</span> your <span>team</span> with a <span>positive</span> workplace.
            <br />
            <span>Hard work</span> doesn't go unnoticed.
            </h1>
        </div>
        <div className='ctaButtons'>
          <button className='slackButton'>Connect with Slack</button>
          <button className='docButton'>Documentation</button>
        </div>
        <div className='subContent'>
          <div className='subHeader'>
            <h2>Admin Dashboard</h2>
            <ul>
              <li>collective data of user analytics</li>
              <li>collaborative access to develop teams</li>
              <li>customizable incentive system</li>
            </ul>
          </div>
          <div className='subHeader'>
            <h2>Teamwork with a twist!</h2>
            <p>Appreciation goes a long way.</p>
            <p>Acknowledging above and beyond performance.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
