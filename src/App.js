import React from "react";
import "./styles.css";

import { Switch, Route } from 'react-router-dom'

import Joke from "./components/Joke/Joke";
import News from "./components/News";
import VirusCount from './components/Covid/VirusCount'
import Navigation from './components/Navigation/Navigation'

export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/"> <News /> </Route>
        <Route path="/jokes"> <Joke /> </Route>
        <Route path="/covid"> <VirusCount />  </Route>
      </Switch>
    </div>
  );
}
