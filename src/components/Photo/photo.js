import React from "react";
import "./photo.css";

function Photo(props) {
  // Import result is the URL of your image
  return <img src={props.photo} alt="{props.alt}" className={props.look} />;
}

export default Photo;
