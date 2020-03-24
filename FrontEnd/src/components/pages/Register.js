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
      solo:false,
      team:false,
      email1:'',
      email2:'',
      email3:'',
      email4:'',

    }
    this.handleChange = this.handleChange.bind(this);
    this.mySubmitHandler = this.handleChange.bind(this);
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
      this.setState({solo:true});
      this.setState({team: false})
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
      this.setState({team:true});
      this.setState({solo: false})
    }

    //handles changes to the inputs
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    //may or may not work 
    checkPassword(){
      if(this.state.password === this.state.confirmPass){
        this.setState({goodPass: true})
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
      axios.get('http://127.0.0.1:5000/registerTeam')
      .then(res =>
        {var result = res.data;
        this.setState({result});
        console.log(result.Result);
      });
    }

    //Submit handler is not working for some reason
    // it doesn't work until you click the submit button.
    mySubmitHandler = (event) =>{
      event.preventDefault();
      if(this.checkPassword()){
        if(this.state.solo){
          axios.post('http://127.0.0.1:5000/registerTeam', 
          {
            TeamName: this.state.TeamName,
            Name: this.state.Name1,
            StudentId: this.state.StudentId1,
            SchoolName: this.state.SchoolName,
            password: this.state.password,
            email: this.state.email1,
          })
          .then(res=>
            {var result = res.data;
            this.setState({result});
            if (result.Result === 0){
              this.setState({redirect_url: '/login'})
            }
            else{
              console.log('nothing');
            }

          })
        }
        else if(this.state.team){
          axios.post('http://127.0.0.1:5000/registerTeam', 
          {
            TeamName: this.state.TeamName,
            Name1: this.state.Name1,
            Name2: this.state.Name2,
            Name3: this.state.Name3,
            Name4: this.state.Name4,
            StudentId1: this.state.StudentId1,
            StudentId2: this.state.StudentId2,
            StudentId3: this.state.StudentId3,
            StudentId4: this.state.StudentId4,
            SchoolName: this.state.SchoolName,
            password: this.state.password,
            email1:this.state.email1,
            email2:this.state.email2,
            email3:this.state.email3,
            email4:this.state.email4,

          })
          .then(res=>
            {var result = res.data;
            this.setState({result});
            if (result.Result === 0){
              this.setState({redirect_url: '/login'})
            }
            else{
              console.log('nothing');
            }

          })
        }
    }
      else{
        alert("Check your password")
      }

    }

  render() {
    if(this.state.redirect_url){
        return (<Redirect to = {this.state.redirect_url}/>)
    }
    else{
        return (

            <React.Fragment>
            <form onSubmit={this.mySubmitHandler}>
              <h1>Register</h1>
              <hr/>

              <label>Team Name</label>
              <i className="fa fa-user"></i>
              <input name="TeamName" type="text" placeholder="Team Name" value={this.state.TeamName} onChange={this.handleChange} required/> <br/>

              <label>Password</label>
              <i className="fa fa-key"></i>
              <input name="password" type="password" placeholder="******" value ={this.state.password} onChange={this.handleChange} required/><br/>

              <label>Confirm Password</label>
              <i className="fa fa-key"></i>
              <input name="confirmPass" type="password" placeholder="******" value={this.state.confirmPass} onChange={this.handleChange} required/><br/>

              <label>School Name</label>
              <i className="fa fa-key"></i>
              <input name="SchoolName" value={this.state.SchoolName} onChange={this.handleChange} required/>

              <button type = "button" onClick={this.solo} id="soloButton">Solo</button>
              <button type = "button" onClick={this.team} id="teamButton">Team</button>

              <div id="Solo">
                <label>Full Name</label>
                <i className="fa fa-user"></i>
                <input type="text" name="Name1" placeholder="Name" value ={this.state.Name1} onChange = {this.handleChange} required/><br/>

                <label>Email</label>
                <i className="fa fa-at"></i>
                <input type="email" name="StudentId1" placeholder="00000000@lcps.org" value = {this.state.email1} onChange={this.handleChange} required/><br/>
                <input type="submit" name ="SoloRegister" onClick={this.mySubmitHandler}/>

              </div>

              <div id="Team">
                <label>Team Member 1</label>
                <i className="fa fa-users"></i>
                <input type="text" name="Name1" placeholder="Full Name" value={this.state.Name1} onChange ={this.handleChange} required/><br/>
                <label>Email</label>
                <i className="fa fa-at"></i>
                <input type="email" name="StudentId1" placeholder="00000000@lcps.org" value = {this.state.email1} onChange={this.handleChange}  required/><br/>

                <label>Team Member 2</label>
                <i className="fa fa-users"></i>
                <input type="text" name="Name2" placeholder="Full Name" value={this.state.Name2} onChange ={this.handleChange} required/><br/>
                <label>Email</label>
                <i className="fa fa-at"></i>
                <input type="email" name="StudentId2" placeholder="00000000@lcps.org" value = {this.state.email2} onChange={this.handleChange}  required/><br/>

                <label>Team Member 3</label>
                <i className="fa fa-users"></i>
                <input type="text" name="Name3"  placeholder="Full Name" value={this.state.Name3} onChange ={this.handleChange}/><br/>
                <label>Email</label>
                <i className="fa fa-at"></i>
                <input type="email" name="StudentId4" placeholder="00000000@lcps.org" value = {this.state.email3} onChange={this.handleChange} />  <br/>

                <label>Team Member 4</label>
                <i className="fa fa-users"></i>
                <input type="text" name="Name4" placeholder="Full Name" value={this.state.Name4} onChange ={this.handleChange}/><br/>
                <label>Email</label>
                <i className="fa fa-at"></i>
                <input type="email" name="StudentId4" placeholder="00000000@lcps.org" value = {this.state.email4} onChange={this.handleChange} />  <br/>
                
                <input type="submit" name ="TeamRegister" onClick={this.mySubmitHandler}/><br/>
              
              </div>
            </form>
    </React.Fragment>
        )
      }
    }
}
