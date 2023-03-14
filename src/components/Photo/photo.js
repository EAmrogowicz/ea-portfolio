import React from "react";
import "./style.css";

function Photo(props) {
  // Import result is the URL of your image
  return <img src={props.photo} alt="{props.alt}" className="img" />;
}

export default Photo;
