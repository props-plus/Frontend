import React, { Component } from "react";
import ReactGA from "react-ga";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import Nav from "../Nav/Nav";

// images
import jumbotron from '../../../img/jumbotron.jpg'
import smiley from '../../../img/smiley.png'
import gift from '../../../img/gift.png'
import slack from '../../../img/slack.png'
import businessman from '../../../img/businessman.jpg'

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
      <>
        <div className='container'>
          <img className='jumbotron' src={jumbotron} />
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
          <div className='scroll'>
            <button className='scrollButton'><svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.596 1.92857C20.596 1.76786 20.5156 1.58705 20.3951 1.46652L19.3906 0.462052C19.2701 0.341517 19.0893 0.26116 18.9286 0.26116C18.7679 0.26116 18.5871 0.341517 18.4665 0.462052L10.5714 8.35714L2.67634 0.462052C2.5558 0.341517 2.375 0.26116 2.21429 0.26116C2.03348 0.26116 1.87277 0.341517 1.75223 0.462052L0.747768 1.46652C0.627232 1.58705 0.546875 1.76786 0.546875 1.92857C0.546875 2.08929 0.627232 2.27009 0.747768 2.39062L10.1094 11.7522C10.2299 11.8728 10.4107 11.9531 10.5714 11.9531C10.7321 11.9531 10.9129 11.8728 11.0335 11.7522L20.3951 2.39062C20.5156 2.27009 20.596 2.08929 20.596 1.92857Z" fill="white" />
            </svg>
            </button>
            <span className='scrollText'>Scroll down</span>
          </div>
          <div className='socialMedia'>
            <span><FontAwesomeIcon className='facebook' icon={faFacebookSquare} /></span>
            <span><FontAwesomeIcon className='twitter' icon={faTwitterSquare} /></span>
            <span><FontAwesomeIcon className='youtube' icon={faYoutubeSquare} /></span>
          </div>
        </div>
        <div className='homeFeatures'>
          <h2>
            <span>PropsPlus</span> is a team based platform <br /> integrated into Slack. <br />  Acknowledgement goes a long way!
          </h2>
          <div className='homeCards'>
            <div className='card'>
              <img className='cardImg' src={slack} />
              <p>An employee can view the <br /> props they've received from <br /> their teammates on Slack. </p>
            </div>
            <div className='card'>
              <img className='cardImg' src={smiley} />
              <p>Show off your achievements <br /> and acknowledgements <br /> with fun badges.</p>
            </div>
            <div className='card'>
              <img className='cardImg' src={gift} />
              <p>Redeem your PropsPoints for <br /> tangible and customizable <br /> rewards.</p>
            </div>
          </div>
        </div>
        <div className='adminFeatures'>
          <img src={businessman} />
          <div className='adminText'>
            <h2>Manage your <span>team</span> <br /> the best way possible.</h2>
            <p>With a robust analytics dashboard, you’ll <br /> learn how to best support your team and <br /> take your projects to the next level.</p>
            <button>Learn more</button>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
