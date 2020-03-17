import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Register extends Component {
    render() {
        return (
            <React.Fragment>
            <div class="godown"/>
            <div class="regbody"/>
            <form>
                <table class="reg">
    
                <td><label>Username</label></td>
                <tr>
                <td><input type="text" style={paddingStyle} size="40" id="username" placeholder="username"/></td>
                </tr>
        
                <tr>
                <td class="special">Warning: Your Username may be visible to other users. Do not include your real name or any other personal information. Also username is same as the team name.</td>
                </tr><br/>

        
                <td><label>Password<a class="apple">*</a></label></td>
                <tr>
                <td><input type="password" style={paddingStyle} size="40" id="pwd" placeholder="password"/></td>
                </tr>

                <tr>
                <td class="reglink">Go back to <Link to = "/login">Login.</Link></td>
                </tr>
    
                <tr>
                <td class="reglink" style={{paddingBottom: '15px'}}><a href="#">Forgot your password?</a></td>
                </tr><br/>
        
                <tr>
                <td class="special">Note: Please type the lcps Email of the Team Member after typing the name of the member.</td>
                </tr>  
        
                <td><label>Team Member 1<a class="apple">*</a></label></td>
                <tr>
                <td><input type="text" style={paddingStyle} size="40" id="Team Member 1" placeholder="Team Member"/> <br/></td>
                </tr>

                <tr>
                <td><label class="email">Email<a class="apple">*</a></label></td>
                <tr>
            
                <td>
                <input type="Email" style={paddingStyle} size="40" id="Email" placeholder="Student ID@lcps.org"/> <br/></td>
                </tr>
        
                <td><label>Team Member 2</label></td>
                <tr>
                <td>
                <input type="text" style={paddingStyle} size="40" id="Team Member 2" placeholder="Team Member"/> <br/></td>
                </tr>
    
                <td><label class="email">Email:</label></td>
                <tr>
                <td>   
                <input type="Email" style={paddingStyle} size="40" id="Email" placeholder="Student ID@lcps.org"/> <br/></td>
                </tr>
    
                <td><label>Team Member 3</label></td>
                <tr>
                <td><input type="text" style={paddingStyle} size="40" id="Team Member 3" placeholder="Team Member"/> <br/></td>
                </tr>
        
                <tr>
                <td><label class="email">Email:</label></td>
                </tr>
                <td>
                
                <input type="Email" style={paddingStyle} size="40" id="Email" placeholder="Student ID@lcps.org"/> <br/></td>
                </tr>
        
                <td><label>School Name:</label></td>
                
                <tr>
                <td><input type="text" style={paddingStyle} size="40" id="school name" placeholder="School Name"/> <br/></td>
                </tr>
                
                <tr>
                <td class="special">Note: School name is opitional.</td>
                </tr>  
                
                </table>
            </form>
    <div class="secondbutton">
        <a href="#"><button Width="100px" type="button" class="regbutton">Register</button></a> 
    </div>
    </React.Fragment>
        )
    }
}

const paddingStyle ={
    padding:'8px'
}