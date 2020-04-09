import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <head>
        <title>Modal Question</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        // we need to fix this meta thing
      </head>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2>Linux no 1</h2>
          </div>
          <div className="modal-body">
            <p>What is Linux</p>
            <form className="answersubmitionform">
              <input type="text" id="modal-input" placeholder="Flag" required />
              <span className="Attempt_input" />
              <button className="model_Submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
