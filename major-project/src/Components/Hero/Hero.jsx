import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Your Gateway to Smarter Electricity Management.</h1>
        <p>
        You can monitor consumption, reduce waste, and optimize energy usage effortlessly.
        Experience seamless energy control with our intuitive monitoring solutions.
        </p>
        <button className="btn">
        Track Usage <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
