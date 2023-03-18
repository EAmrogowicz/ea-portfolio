import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div
      className={props.style}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1609875133820-c680be09df88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80)",
      }}
    >
      {props.children}
    </div>
  );
}

export default Hero;
