import React, { Component } from 'react'
import ImageMapper from 'react-image-mapper'
import { withRouter } from 'react-router-dom'

class Map extends Component {
    render() {
        const map = {
            name:'my-map',
            areas: [
                {
                    name:'room',
                    shape:'rect',
                    coords:[0,0,500,500],
                    preFillColor:'rgba(255,0,0, 0.5)',
                    fillColor:'null',
                    question: "what's your name?",
                }

            ]
        }

        return(
            <React.Fragment>
                <center>
                <ImageMapper src = {require('../images/lower-level.png')} map={map}
                    onClick = {area => this.askQuestion(area)}
                />
                </center>
            </React.Fragment>
        )
    }

    askQuestion = area => {
        console.log(area.question)
    }

}

export default withRouter(Map);