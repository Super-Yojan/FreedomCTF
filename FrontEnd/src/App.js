  import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from './components/pages/Map';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NavMenu from './components/NavMenu';
import Register from './components/pages/Register'
import Scoreboard from './components/pages/Scoreboard'
import Forgot from './components/pages/Forgot'
import Reset from './components/pages/Reset'
//App.js does all the overhead communication and oversees all the pages. Everything else is handled by the pages

export default class App extends Component {

  state = {
    isLoggedIn: false,

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
         <Route exact path ="/forgot" render={props =>(
          <React.Fragment>
            <Forgot/>
          </React.Fragment>
        )}/>
        <Route exact path ="/reset" render={props =>(
          <React.Fragment>
            <Reset/>
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
        {/*added a route to scoreboard*/}
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
