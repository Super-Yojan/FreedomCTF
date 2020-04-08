import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// probably need to change this to "./ManageTeams";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
