import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomeNav.css';

export default function NavMenu() {
    return (
        <React.Fragment>
            <nav>
                <img src="https://www.lcps.org/cms/lib/VA01000195/Centricity/Template/GlobalAssets/images///logos/FreedomHS-eaglehead177x160.png" alt="Freedom"/>
                <Link style ={logoStyle}>Freedom CyberChase</Link>
                {/* <div className = "overlay"></div> <-- dont know what to do with this */}
                <ul>
                    <Link to = '/'> Home </Link> 
                    <Link to = '/login'>Login</Link>
                {/*    <Link to = '/map'>Map</Link> */}
                    <Link to = '/scoreboard'>Scoreboard</Link>
                {/*//we need some logic here*/}
                    <Link to = '/register'>Register</Link>
                </ul>
            </nav>
        </React.Fragment>
    )
}

//hamburger functionality here:


const logoStyle ={  //nav.menu
    fontSize:'30px' /* <-- changed from 36px to make less imposing*/,
    color: 'white',
    float: 'left',
    padding:'5px',
    fontFamily:'monospace' /*temporary font*/,
}
