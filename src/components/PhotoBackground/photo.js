import React from "react";
import "./photo.css";

function Photo(props) {
  // Import result is the URL of your image
  return (
    <div className="imgGradient">
      <img src={props.photo} alt="{props.alt}" className="img" />
    </div>
  );
}

export default Photo;
