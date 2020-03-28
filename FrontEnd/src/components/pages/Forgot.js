import React, { Component } from 'react';
import '../../css/Alert.css';
import axios from 'axios';


export default class Forgot extends Component {

	constructor(props){
		super(props);
		this.state={
			"TeamName":"",
		}
	}

	

	handelChange= (event) =>{
		this.setState({[event.target.name]:event.target.value});
	}

	onSubmitHandler = (event) =>{
		event.preventDefault();
		axios.post('http://127.0.0.1:8003/sendMail',{"TeamName":this.state.TeamName})
		.then(res=>{
			alert(res.data.Message);
		});
	}


    render() {
        return (
            <React.Fragment>
                <h1 class="form">Reset Password</h1>
                <form onSubmit={this.onSubmitHandler}>
                <div class="alert">Email will sent to your team creator, be sure to contact them before sendig the 
                Email</div>
                <label>Team Name</label>
                	<div>
                        <i class="fa fa-user"></i>
                        <input type="text"  name="TeamName" placeholder="Team Name" onChange={this.handelChange}/>
                        </div>
                        <input type="submit" value="Send Email"/>
                </form>
            </React.Fragment>
        )
    }
}

