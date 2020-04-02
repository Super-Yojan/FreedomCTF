import React from 'react';
import { Link } from 'react-router-dom';
import '../website.css';

export default function NavMenu() {
    return (
        <React.Fragment>
            <nav className="navbar">
                {/* <div className = "overlay"></div> <-- dont know what to do with this */}
                <Link className="navbar-logo">Freedom CyberChase <img className = "navbar-logo-img" src="https://www.lcps.org/cms/lib/VA01000195/Centricity/Template/GlobalAssets/images///logos/FreedomHS-eaglehead177x160.png" alt="Freedom"/></Link>

                <ul className = "navbar-nav">
                    <Link className="navbar-item" to = '/'> Home </Link> 
                    <Link className="navbar-item" to = '/login'>Login</Link>
                {/*    <Link to = '/map'>Map</Link> */}
                    <Link className="navbar-item" to = '/scoreboard'>Scoreboard</Link>
                {/*//we need some logic here*/}
                    <Link className="navbar-item" to = '/register'>Register</Link>
                </ul>
            </nav>
        </React.Fragment>
    )
}