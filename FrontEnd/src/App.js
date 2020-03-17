import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from './components/pages/Map';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NavMenu from './components/NavMenu';

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
      </Router>
    )
  }
}

