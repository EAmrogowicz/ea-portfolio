import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div
      className={props.style}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1461958508236-9a742665a0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
      }}
    >
      {props.children}
    </div>
  );
}

export default Hero;
