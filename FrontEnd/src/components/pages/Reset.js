import React, { Component } from 'react';
import queryString from 'query-string';
import { withRouter } from "react-router-dom";

import axios from 'axios';


class Reset extends Component {

	constructor(props){
		super(props);
		this.state={
			"TeamName":"",
			"TeamPassword":"",
			"PasswordMatch": false,
			"Token":'',
			"TokenMatch":"false",
		}
	}

	componentDidMount(){
		var query=queryString.parse(this.props.location.search);
		this.setState({["Token"]:query.token});
		this.setState({["TeamName"]:query.TeamName});
		console.log(this.state.Token);
		axios.get('api/forgot/validateToken',
			{params:
				{ 
					token: query.token,
					TeamName: query.TeamName
				}
			})
		.then(res=>{
			console.log(res)
			this.setState({["TokenMatch"]:res.data.Result});
			console.log(this.state);
		});
		try{
			document.getElementById("alert").style.visibility="hidden";
		}
		catch(err){

		}
	}
	handelChange= (event) =>{
		this.setState({[event.target.name]:event.target.value});
	}

	confirmPassword=(event)=>{
		if(this.state.TeamPassword != event.target.value){
			
			document.getElementById("alert").style.visibility="visible";
			this.setState({["PasswordMatch"]:false});
		}
		else{

			document.getElementById("alert").style.visibility="hidden";
			this.setState({["PasswordMatch"]:true});			
		}
	}

	onSubmitHandler = (event) =>{
		event.preventDefault();
		if(this.state.PasswordMatch){
		axios.put('api/forgot/reset',{"TeamPassword":this.state.TeamPassword,"TeamName":this.state.TeamName})
		.then(res=>{
			alert(res.data.Message);
			if(res.data.Result == 1){
				this.props.history.push('/login');
			}
		});}
		else{
			alert("Password should match to proceed")
		}
	}


    render() {
    	if(this.state.TokenMatch == "true"){
        return (
            <React.Fragment>
                <h1 class="form">Reset Password</h1>
                <form onSubmit={this.onSubmitHandler}>
                <div class="alert">Make sure to share new password with the team</div>
                <label>New Password</label>
                	<div>
                        <i class="fa fa-lock"></i>
                        <input type="password"  name="TeamPassword" placeholder="Team Name" onChange={this.handelChange}/>
                    </div>
				<label>Confirm Password</label>
                	<div>
                        <i class="fa fa-lock"></i>
                        <input type="password"  name="Password" placeholder="Team Name" onChange={this.confirmPassword}/>
                        </div>
                        <span style={{background:"#fcf4a9",padding:3+"px"}} id="alert">Password doesn't match</span>
                        

                        <input type="submit" value="Reset"/>
                </form>
            </React.Fragment>
        )
    	}
    	else{
    		return(
            <React.Fragment>
                <h1 class="form">Reset Password</h1>
                <div class="alert">Sorry, Either the token expired or you are at wrong place</div>
            </React.Fragment>    				
    			)
    	}
    }
}

export default withRouter(Reset);