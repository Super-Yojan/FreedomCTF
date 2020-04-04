import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Map from './components/pages/Map';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NavMenu from './components/NavMenu';
import Register from './components/pages/Register';
import Scoreboard from './components/pages/Scoreboard';
import Forgot from './components/pages/Forgot';
import Reset from './components/pages/Reset';
import decode from 'jwt-decode'

//App.js is basically index.js

const checkAuth = () =>{
  const token = localStorage.getItem('token')
  const refreshToken = localStorage.getItem('refreshToken')
  if(!token || !refreshToken){
    return false;
  }

  try{
    const { exp } = decode(token);

    console.log(exp)
    console.log(new Date().getMilliseconds())

    if(exp < new Date().getMilliseconds()){
      return false;
    }
  }
  catch(e){
    return false;
  }

  return true;
}

//auth for login redirect
const AuthRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={ props =>(
    checkAuth() ? (
      <Redirect to = '/map'/>
    ) : (
      <Redirect to = {{pathname:'/login'}}/>
    )
  )}/>
)

export default class App extends Component {

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
          <AuthRoute exact path ="/login" component={Login}/>
          <Route exact path ="/map" render={props =>(
              <React.Fragment>
                <Map/>
            </React.Fragment>
          )}/>
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