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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button size="large" primary>
              Learn more &raquo;
            </Button>
          </Container>
        </Message>
        <Container>
          <Grid stackable columns="three">
            <Grid.Column>
              <Header as="h1">Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
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
