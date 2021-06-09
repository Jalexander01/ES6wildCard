import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, thirdPi } from "./math.js";
ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{thirdPi}</li>
  </ul>,
  document.getElementById("root")
);
