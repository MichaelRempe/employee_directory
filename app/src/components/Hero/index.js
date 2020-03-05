import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1169465095/960x0.jpg?fit=scale)` }}>
      {props.children}
    </div>
  );
}

export default Hero;
