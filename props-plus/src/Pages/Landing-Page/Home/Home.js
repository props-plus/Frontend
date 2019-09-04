import React, { Component } from "react";
import ReactGA from "react-ga";

import Nav from "../Nav/Nav";

import {HomeStyle} from "./styles.js"


import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Menu,
  Message
} from "semantic-ui-react";


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
        <HomeStyle>
        <Message size="massive">
          <Container>
            <Header size="huge" as="h1">
              
            </Header>
            <p>
            Healthy office cultures often acknowledge good work from their coworkers and peers. Award your peers with acknowledgements that act like coins/points in Slack when they do awesome things - and never let the acknowledgement of their good work get lost in the shuffle again.
            </p>
            <Button size="large" primary>
              Learn more &raquo;
            </Button>
          </Container>
        </Message>
        <Container>
          <Grid stackable columns="three">
            <Grid.Column>
              <Header as="h1">Slack Integration</Header>
              <p>
              An employee can view the props they've received on their Slack Workspace. These will also be viewable by other employees in the group in a group channel. 
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">People Pushing Positivity</Header>
              <p>
              Through a leader-board system that tracks each users props score. You will be able to look over all of the props you have received.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1"> Positive Reinforcement</Header>
              <p>
              A network effect is created, when multiple companies use this application and are able to track employee reputation through many companies over time.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Divider />
          <footer>&copy; 2019 Props, Inc.</footer>
        </Container>
        </HomeStyle>
      </div>
    );
  }
}

export default Home;
