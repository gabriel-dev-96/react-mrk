import "./App.css";
//import React, { useState, useEffect } from "react";
import Login from "./views/Login/Login";
import Home from "./views/Home";
//import fb from "./config/firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return(
    <Router>
    <Switch>
      <Route path="/" exact>
        <Login/>
      </Route>
      <Route path="/Home">
        <Home/>
      </Route>
    </Switch>
  </Router>

  );
};

export default App;
