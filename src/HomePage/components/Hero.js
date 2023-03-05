import React from "react";
import "./styles/hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <img src={require('../../img/hero.jpg')} alt="" className="hero-img" />
      <div className="hero-text">
        Save time, the hassle, and fees with our fast and reliable permit services.
      </div>
    </div>
  );
}

export default Hero;
