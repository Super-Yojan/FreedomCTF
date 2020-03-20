import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from './components/pages/Map';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NavMenu from './components/NavMenu';
import Register from './components/pages/Register'
import Scoreboard from './components/pages/Scoreboard'

//App.js does all the communication to back end and oversees all the pages. Everything else is handled by the pages

export default class App extends Component {

  state = {

  }

  render() {
    return (
      <Router>
        <NavMenu/>
         <Route exact path ="/" render={props =>(
          <React.Fragment>
            <Home/>
          </React.Fragment>
        )}/>
        <Route exact path ="/login" render={props =>(
          <React.Fragment>
            <Login/>
          </React.Fragment>
        )}/>
        <Route exact path ="/map" render={props =>(
          <React.Fragment>
            <Map/>
          </React.Fragment>
        )}/>
        // added a reoute to scoreboard
           <Route exact path ="/scoreboard" render={props =>(
            <React.Fragment>
              <Scoreboard/>
            </React.Fragment>
          )}/>
         <Route exact path ="/register" render={props =>(
          <React.Fragment>
            <Register/>
          </React.Fragment>
        )}/>
      </Router>
    )
  }
}
