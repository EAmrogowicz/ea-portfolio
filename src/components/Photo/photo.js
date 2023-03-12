import React from "react";
import photo from "./ewelinastudio-painting.jpg"; // Tell webpack this JS file uses this image
import "./photo.css";

function Photo() {
  // Import result is the URL of your image
  return <img src={photo} alt="Ewelina" className="img" />;
}

export default Photo;
