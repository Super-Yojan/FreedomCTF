import React, { Component } from 'react'
//import '../../css/Login.css';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
//these two are something i got online for this.props.history.pussh
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      TeamName : '',
      TeamPassword: '',
      redirect_url: null,
    }
    this.handelChange = this.handelChange.bind(this);
  }
//This handles change in input to get all the necessary information...
   handelChange(event) {
    console.log('change');
    this.setState({[event.target.name]: event.target.value});
  }


  //this is useless code i tried to use it to do the redirect but didn't work
  //the paramater was supposed to be a boolean value , and if the function reutrns
  //true then it will re-render the whole page.
  

//It handlles submit event
  onSubmitHandler = (event) => {
    //this prevents default action by the form submit
    event.preventDefault();

    //This is the post call being called
    axios.post('http://localhost:8000/login',{
      TeamName:this.state.TeamName,
      TeamPassword:this.state.TeamPassword
    }).then(res => {
          console.log(res.data);
          if (res.data.Result === 1){
            this.setState({redirect_url : '/map'});
        console.log(this.props.location);
      }
    } );
  }

  


    render() {
      if(this.state.redirect_url){
        return (<Redirect to = {this.state.redirect_url}/>)
    }
    else{
        return (
            <React.Fragment>
              <h1 class="form">Login</h1>
                    <form onSubmit={this.onSubmitHandler}>
                    
                        <label id="uname"> Team Name Or Email</label>
                        <div>
                        <i class="fa fa-user"></i>
                        <input type="text"  name="TeamName" placeholder="Username" onChange={this.handelChange}/>
                        </div>
                        <br/>
                        <label id="upassword"> Password</label>
                        <div>
                        <i class="fa fa-lock"></i>
                        <input type="password"  id="password" placeholder="Password" name= "TeamPassword" onChange={this.handelChange}/>
                        </div>
                        <input type="submit" width="100px" value="Login"/>
                        <br/>
                        <Link>Forgot?</Link>
                        <br/>
                        <Link to ="/register">Create an Account</Link>

                    </form>

            </React.Fragment>
        )

    }
  }
}
