import React, { Component } from 'react'
import '../../website.css';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <img className="main-img" src="https://dw3jhbqsbya58.cloudfront.net/school-mascot/7/1/8/718c5c04-6e56-47e7-94e7-8df466f57c56.gif?version=636572181000000000" alt="Freedom logo" />
                </header>
                <main>
                    <h1>Welcome to CyberChase CTF</h1>
                    <p>
                    Cyber Chase is a free computer security game targeted at middle and high school students, created by students
                    at Freedom High School. The game consists of a series of challenges centered around a unique storyline where
                    participants must reverse engineer, break, hack, decrypt, or do whatever it takes to solve the challenge.
                    </p>
                </main>
            </React.Fragment>
        )
    }
}