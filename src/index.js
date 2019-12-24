//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date(2019, 1, 1, 1.45);
const curretTime = currentDate.getHours();

const customStyle = {
  color: ""
};

let gretting;

if (curretTime > 12) {
  gretting = "Good morning";
  customStyle.color = "red";
} else if (curretTime < 18) {
  gretting = "Good Afternoon";
  customStyle.color = "blue";
} else {
  gretting = "Good Evening";
  customStyle.color = "yellow";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good morning
  </h1>,
  document.getElementById("root")
);
