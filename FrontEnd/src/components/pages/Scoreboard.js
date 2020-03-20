import React, { Component } from 'react';
import '../../css/Scoreboard.css';
import { Link } from 'react-router-dom';


// just a simple scoreboard
export default class Scoreboard extends Component {


    render() {
      return(
      <React.Fragment>
      <div class="top_three">

      <div class="Third">
        <div class="third_team">Team Name</div>
      </div>
      <div class="First">
              <div class="first_team">Team Name</div>
      </div>
      <div class="Second">
              <div class="second_team">Team Name</div>
      </div>
      </div>
        <ol class="scoreboard_list" start="4">
        <li>Team Name <span class="Score">000</span></li>
        <li>Team Name <span class="Score">000</span></li>
        <li>Team Name <span class="Score">000</span></li>
        <li>Team Name <span class="Score">000</span></li>

        </ol>
      </React.Fragment>
)
    }
}
