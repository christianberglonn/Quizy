import React, { Component } from "react";
import './App.css';
import Game from "./components/Game/Game";
import End from "./components/End/End";
import Highscores from "./components/Highscores/Highscores";
import Dashboard from "./components/Dashboard/Dashboard";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/game" component={Game} />
              <Route exact path="/end" component={End} />
              <Route exact path="/highscores" component={Highscores} />
              <Dashboard />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
