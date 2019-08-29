import React, { Component } from "react";
import ReactGA from "react-ga";


import Nav from "../Nav/Nav"
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Menu,
  Message,
  Image,
  Reveal,
} from "semantic-ui-react";

import { AboutDiv } from './style.js'




class Home extends Component {


  initializeReactGA() {
    ReactGA.initialize("UA-146126284-1"); //Tracking ID
    ReactGA.pageview("/about"); //Name of the page being
  }

  componentDidMount() {
    this.initializeReactGA(); //When ever componentDidMount event is triggered.
  }




  render() {
    return (
      <AboutDiv>
        <Nav />
        <Container text textAlign='center'>
          <Header
            as='p'
            content='EMPLOYEE RECOGNITION PLATFORM'
            inverted
            style={{
              color: '#000',
              fontSize: '.8em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '10em',
            }}
          />
          <Header
            as='h1'
            content='"People Pushing Positivity"'
            inverted
            style={{
              color: '#000',
              fontSize: '3em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '.5em',
            }}
          />
          <Header
            as='p'
            content='A postitive workplace is a positive mindset.'
            inverted
            style={{
              fontSize: '1.4em',
              fontWeight: 'normal',
              marginTop: '.5em',
              marginBottom: '1.5em',
              color: '#000',
            }}
          />
          <Button primary animated>
            <Button.Content visible>Learn More</Button.Content>
            <Button.Content hidden>
              <Icon name='handshake outline' size='large' />
            </Button.Content>
          </Button>
          <Header
            as='h2'
            content="Empower Your Workplace, Empower Your Environment"
            inverted
            style={{
              fontSize: '1.5em',
              fontWeight: 'bold',
              marginTop: '7.5em',
              marginBottom: '.5em',
              color: '#000',
              textAlign: 'left'
            }}
          />
          <Header
            as='p'
            content="MyPropsPlus not only promotes a healthy workplace, it also proves that hard work doesn't go unnoticed.  The ultimate utility to not only encourage your team but also strengthen it in the process.  Motivation is the key to success, inspire innovation. "
            inverted
            style={{
              fontSize: '1.2em',
              fontWeight: 'normal',
              marginBottom: '1.5em',
              color: '#000',
              textAlign: 'left'
            }}
          />
        </Container>
        <Divider style={{
          marginTop: '7em'
        }} />
      </AboutDiv>
    );
  }
}

export default Home;
