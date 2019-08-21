import React,{ Component } from "react";

//React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

//Page 
import Home from "./Pages/Home/Home.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
