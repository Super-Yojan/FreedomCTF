import React, { Component } from 'react'
import '../../css/Login.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='total'>
                    <div className="login">
                        <h1>Login</h1>
                    </div>
                    <div className="titlelogin">
                    <form>
                        <label className="log" id="uname"> Team Name Or Email</label>
                        <input type="text" style ={boxStyle} placeholder="Username"/>
                        <br></br>
                        <label className="log" id="upassword"> Password</label>
                        <br></br>
                        <input type="password" style={boxStyle} id="password" placeholder="Password"/>
                        <div>
                        <input className ="buttonlog" type="submit" width="100px" value="Login"></input>
                        <br></br>
                        <Link>Forgot?</Link>
                        <br></br>
                        <Link>Create an Account</Link>
                        </div>
                    </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const boxStyle = {
    width: '350px',
    padding: '15px',
}