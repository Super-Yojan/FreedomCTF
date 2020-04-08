import React from "react";
import "./styles.css";

export default function App() {
  return (
    //need to change the heading and add link for baritem sidebutton and className kickout
    // I wrote this page with the title of App so that will affect a lot of things
    <div className="App">
      <div className="sidebar">
        <h3 className="baritem heading">Menu</h3>
        <a href="index.html" className="baritem sidebutton">
          Manage Question
        </a>
        <a href="ManageTeam.html" className="baritem sidebutton">
          Manage Teams
        </a>
        <a href="#" className="baritem sidebutton">
          Add Alerts
        </a>
      </div>

      <div className="admincontent">
        <table>
          <tr>
            <th>Number</th>
            <th>Team</th>
            <th>Main Email</th>
            <th>Micro-manage</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>1</td>
            <td>dilettante</td>
            <td>00000@lcps.org</td>
            <td>
              <a className="kickout">reset question</a>
            </td>
            <td>
              <a className="kickout">Deactivate</a>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>team 2</td>
            <td>00000@lcps.org</td>
            <td>
              <a className="kickout">reset question</a>
            </td>
            <td>
              <a className="kickout">Deactivate</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
