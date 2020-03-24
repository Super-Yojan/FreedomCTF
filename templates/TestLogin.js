import React, { Component } from 'react'
import '../../css/Login.css';
import { Link } from 'react-router-dom';
//these two are something i got online for this.props.history.pussh
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import axios from 'axios';

export default class Login extends Component {


  state={
      TeamName:'',
      TeamPassword:'',
      redirect:null,
  }
//This handles change in input to get all the necessary information...
  handelChange = (event) => {
    let nam = event.target.name;
    let value = event.target.value;
    this.setState({
      [nam] : value
    })
  }


  //this is useless code i tried to use it to do the redirect but didn't work
  //the paramater was supposed to be a boolean value , and if the function reutrns
  //true then it will re-render the whole page.
  shouldComponentUpdate(should){
    return should;
  }

//It handlles submit event
  onSubmitHandler = (event) => {
    //this prevents default action by the form submit
    event.preventDefault();
    //this the data that we are sendting to the api
    let data = {
      TeamName:this.state.TeamName,
      TeamPassword:this.state.TeamPassword,
    }
    //just printing the data for debuging.
    console.log(data);

    //This is the put call being called
    axios.put('http://127.0.0.1:5000/login',{data})
    .then(res => {
      console.log(res.data);
      if (res.data.Result == 1){

        //we need to redirect to '/map' but i don't know how to do it..
        //I serached a lot online but nothing really worked...

        //One of the most possible answer was using 'this.props.history.push('/map')'
        console.log(this.props.location);
      }
    } )

  }

  
render() 
  {
      return (
          <React.Fragment>
            <div className="total">
              <div className="something">
                <div className="login88">
                  <h1>Login</h1>
                </div>
              </div>

              <form>
                <label className="log" id="uname">Team Name or Email</label>
                
                  <i className="fa fa-user icon"></i>
                  <input type="text" id="username" placeholder="Username"></input>

                <label className="log" id="upassword">Password</label>

                  <i className="fa fa-key icon"></i>
                  <input type="password" id="password" placeholder="Password"></input>

                <div>
                  <input className="buttonlog" type="submit" width="100px" value="Login"></input>
                  <br></br>
                  <a href="#">Forgot?</a>
                  <p><a href="#">Create an Account</a></p>
                </div>
              </form>
              </div>
          </React.Fragment>
        )

      }
}
