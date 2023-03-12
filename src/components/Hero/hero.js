import React from "react";
import "./hero.css";

function Hero(props) {
  return (
    <div
      className="hero"
      style={{ backgroundImage: "url(../hero-banner.avif)" }}
    >
      {props.children}
    </div>
  );
}

export default Hero;
