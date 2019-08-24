import React, { Component } from "react";

//React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

//Page
import Home from "./Pages/Landing-Page/Home/index.js";
import Price from "./Pages/Landing-Page/Price/index.js";
import About from "./Pages/Landing-Page/About/index.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/pricing" component={Price} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
