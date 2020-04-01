import React, { Component } from 'react';
import '../../css/Register.css';
import { Redirect } from "react-router-dom";
import axios from 'axios';

export default class Register extends Component {

  constructor(props){
    super(props)
    this.state = {
      TeamName: '',
      Name1:'',
      Name2:'',
      Name3:'',
      Name4:'',
      StudentId1:'',
      StudentId2:'',
      StudentId3:'',
      StudentId4:'',
      SchoolName:'Freedom High School',
      result:'',
      redirect_url:null,
      password:'',
      confirmPass:'',
      goodPass: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.SubmitHandler = this.handleChange.bind(this);
  }

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

    //handles changes to the inputs
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    //may or may not work 
    checkPassword(){
      if(this.state.password === this.state.confirmPass){
        this.setState({goodPass: true});
        return this.state.goodPass;
      }
      else{
        return this.state.goodPass;
      }
    }

    //This handles form submit
    // these are all the data that we need to send to the server
    //this works perfectly fine
    componentDidMount(){
      axios.get('api/register')
      .then(res =>
        {var result = res.data;
        this.setState({result});
        console.log(result.Result);
      });
    }

    //Submit handler is not working for some reason
    // it doesn't work until you click the submit button.
    onSubmitHandler  = (event) =>{
      event.preventDefault();
      console.log("click");
      axios.post('api/register', 
          {
            TeamName: this.state.TeamName,
            Name1: this.state.Name1,
            Name2: this.state.Name2,
            Name3: this.state.Name3,
            Name4: this.state.Name4,
            StudentID1: this.state.StudentId1,
            StudentID2: this.state.StudentId2,
            StudentID3: this.state.StudentId3,
            StudentID4: this.state.StudentId4,
            SchoolName: this.state.SchoolName,
            TeamPassword: this.state.password,

          })
          .then(res=>
            {var result = res.data;
            this.setState({result});
            console.log(result.Result)
            if (result.Result == 1){
              this.setState({redirect_url: '/login'});
            }
            else{
              console.log('nothing');
            }

          })
        }

  render() {
    if(this.state.redirect_url){
        return (<Redirect to = {this.state.redirect_url}/>)
    }
    else{
        return (

            <React.Fragment>
              <h1 class="form">Register</h1>
            <form onSubmit={this.onSubmitHandler}>

              <label>Team Name</label>
              <div>
              <i className="fa fa-user"></i>
              <input name="TeamName" type="text" placeholder="Team Name" value={this.state.TeamName} onChange={this.handleChange} required/> <br/>
              </div>
              <label>Password</label>
              <div>
              <i class="fa fa-lock"></i>
              <input name="password" type="password" placeholder="******" value ={this.state.password} onChange={this.handleChange} required/><br/>
              </div>
              <label>Confirm Password</label>
              <div>
              <i class="fa fa-lock"></i>
              <input name="confirmPass" type="password" placeholder="******" value={this.state.confirmPass} onChange={this.handleChange} required/><br/>
              </div>
              <label>School Name</label>
              <div>
              <i class="fa fa-building"></i>
              <input name="SchoolName" value={this.state.SchoolName} onChange={this.handleChange} required/>
              </div>
              <button type = "button" onClick={this.solo} id="soloButton">Solo</button>
              <button type = "button" onClick={this.team} id="teamButton">Team</button>

              <div id="Solo">
                <label>Full Name</label>
                <div>
                <i className="fa fa-user"></i>
                <input type="text" name="Name1" placeholder="Name" value ={this.state.Name1} onChange = {this.handleChange} required/><br/>
                </div>
                <label>Email</label>
                <div>
                <i className="fa fa-envelope"></i>
                <input type="email" name="StudentId1" placeholder="StudentID@lcps.org" value = {this.state.email1} onChange={this.handleChange} required/><br/>
                </div>

              </div>

              <div id="Team">
                <label>Team Member 1</label>
                <div>
                <i className="fa fa-users"></i>
                <input type="text" name="Name1" placeholder="Full Name" value={this.state.Name1} onChange ={this.handleChange} required/><br/>
                </div>
                <label>Email</label>
                <div>
                <i className="fa fa-envelope"></i>
                <input type="email" name="StudentId1" placeholder="StudentID@lcps.org" value = {this.state.email1} onChange={this.handleChange}  required/><br/>
                </div>
                <label>Team Member 2</label>
                <div>
                <i className="fa fa-users"></i>
                <input type="text" name="Name2" placeholder="Full Name" value={this.state.Name2} onChange ={this.handleChange} required/><br/>
                </div>
                <label>Email</label>
                <div>
                <i className="fa fa-envelope"></i>
                <input type="email" name="StudentId2" placeholder="StudentID@lcps.org" value = {this.state.email2} onChange={this.handleChange}  required/><br/>
                </div>
                <label>Team Member 3</label>
                <div>
                <i className="fa fa-users"></i>
                <input type="text" name="Name3"  placeholder="Full Name" value={this.state.Name3} onChange ={this.handleChange}/><br/>
                </div>
                <label>Email</label>
                <div>
                <i className="fa fa-envelope"></i>
                <input type="email" name="StudentId4" placeholder="StudentID@lcps.org" value = {this.state.email3} onChange={this.handleChange} />  <br/>
                </div>
                <label>Team Member 4</label>
                <div>
                <i className="fa fa-users"></i>
                <input type="text" name="Name4" placeholder="Full Name" value={this.state.Name4} onChange ={this.handleChange}/><br/>
                </div>
                <label>Email</label>
                <div>
                <i className="fa fa-envelope"></i>
                <input type="email" name="StudentId4" placeholder="StudentID@lcps.org" value = {this.state.email4} onChange={this.handleChange} />  <br/>
                </div>
              
              </div>
                <input type="submit" name ="SoloRegister" onClick={this.onSubmitHandler} value="Register"/>

            </form>
    </React.Fragment>
        )
      }
    }
  }
