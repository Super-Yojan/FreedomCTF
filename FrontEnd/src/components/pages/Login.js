import React, { Component } from 'react'
import '../../css/Login.css';
import { Link } from 'react-router-dom';
//these two are something i got online for this.props.history.pussh
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Login extends Component {


  state={
      TeamName:'',
      TeamPassword:'',
      redirect:null,
  }
//This handles change in input to get all the necessary information...
  handleChange = (event) => {
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
        this.route.push('/map')
        
        //we need to redirect to '/map' but i don't know how to do it..
        //I serached a lot online but nothing really worked...

        //One of the most possible answer was using 'this.props.history.push('/map')'
        console.log(this.props.location);
      }
    } )

  }


    render() {
        return (
            <React.Fragment>
                    <form onSubmit={this.onSubmitHandler}>
                    <h1>Login</h1>
                        <label  id="uname"> Team Name Or Email</label>
                        <i class="fa fa-user"></i>
                        <input type="text"  name="TeamName" placeholder="Username" onChange={this.handelChange}/>
                        <br/>
                        <label id="upassword"> Password</label>
                        <i class="fa fa-at"></i>
                        <input type="password"  id="password" placeholder="Password" name= "TeamPassword" onChange={this.handelChange}/>
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
