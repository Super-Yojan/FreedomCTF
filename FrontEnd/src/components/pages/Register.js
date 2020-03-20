import React, { Component } from 'react';
import '../../css/Register.css';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import axios from 'axios';

export default class Register extends Component {

// This is for the tabs of solo and Register
    solo = () =>{
      var team = document.getElementById('Team');
      team.style.display="none";
      var solo = document.getElementById('Solo');
      solo.style.display="block";
      var soloButton = document.getElementById('soloButton');
      soloButton.classList.add('active');
      var teamButton = document.getElementById('teamButton');
      teamButton.classList.remove('active');
    }
    team = () =>{
      var x = document.getElementById('Solo');
      x.style.display="none";
      var team = document.getElementById('Team');
      team.style.display="block";
      var soloButton = document.getElementById('soloButton');
      soloButton.classList.remove('active');
      var teamButton = document.getElementById('teamButton');
      teamButton.classList.add('active');
    }

    //This handles form submit
    // these are all the data that we need to send to the server
    state= {
      TeamName: '',
      Name1:'',
      Name2:'',
      Name3:'',
      Name4:'',
      StudentId1:'',
      StudentId2:'',
      StudentId3:'',
      StudentId4:'',
      SchoolName:'',
      result:'',
      redirect_url:null,
    }
    //this works perfectly fine
    componentDidMount(){
      axios.get('http://127.0.0.1:5000/registerTeam')
      .then(res=>
        {var result = res.data;
        this.setState({result});
        console.log(result.Result);

      });
    }
    //Submit handler is not working for some reason
    // it doesn't work until you click the submit button..
    mySubmitHandler = (event) =>{
      event.preventDefault();
      axios.get('http://127.0.0.1:5000/registerTeam')
      .then(res=>
        {var result = res.data;
        this.setState({result});
        if (result.Result == 0){
          this.state.redirect_url = '/login';
        }
        else{
          console.log('nothing');
        }

      })

    }

  render() {
    if(this.state.redirect_url){
        return (<Redirect to={this.state.redirect_url}/>)
    }
    else{
        return (

            <React.Fragment>

            <form onSubmit={this.mySubmitHandler}>
              <h1>Register</h1>
              <hr/>
              <label>Team Name</label>
              <i class="fa fa-user"></i>
              <input type="text" placeholder="Team Name" required/><br/>
              <label>Password</label>
              <i class="fa fa-key"></i>
              <input type="password" placeholder="******" required/><br/>
              <label>Conform Password</label>
              <i class="fa fa-key"></i>
              <input type="password" placeholder="*******" required/><br/>
              <label>School Name</label>
              <i class="fa fa-key"></i>
              <input type="SchoolName" defaultValue="Freedom High School" required/><br/>

              <button onClick={this.solo} id="soloButton">Solo</button>
              <button onClick={this.team} id="teamButton">Team</button>
// this is for the solo register
              <div id="Solo">
                <label>Full Name</label>
                <i class="fa fa-user"></i>
                <input type="text" name="Name1" placeholder="Name" required/><br/>
                <label>Email</label>
                <i class="fa fa-at"></i>
                <input type="email" name="StudentId1" placeholder="00000000@lcps.org" required/><br/>
                <input type="submit" value="Register" onClick={this.mySubmitHandler}/>
              </div>
// this is for the team register
              <div id="Team">
                <label>Team Member 1</label>
                <i class="fa fa-users"></i>
                <input type="text" name="Name1" placeholder="Full Name" required/><br/>
                <label>Email</label>
                <i class="fa fa-at"></i>
                <input type="email" name="StudentId1" placeholder="00000000@lcps.org" required/><br/>
                <label>Team Member 2</label>
                <i class="fa fa-users"></i>
                <input type="text" name="Name2" placeholder="Full Name" required/><br/>
                <label>Email</label>
                <i class="fa fa-at"></i>
                <input type="email" name="StudentId2" placeholder="00000000@lcps.org" required/><br/>
                <label>Team Member 3</label>
                <i class="fa fa-users"></i>
                <input type="text" name="Name3" placeholder="Full Name"/><br/>
                <label>Team Member 4</label>
                <i class="fa fa-users"></i>
                <input type="text" name="Name4" placeholder="Full Name"/><br/>
                <label>Email</label>
                <i class="fa fa-at"></i>
                <input type="email" name="StudentId4" placeholder="00000000@lcps.org"/>  <br/>
                <input type="submit" value="Register"/>
              </div>
            </form>
    </React.Fragment>
        )
      }
    }
}
