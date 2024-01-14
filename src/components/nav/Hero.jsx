import React from "react";

import home from "./../../assets/images/header-bg.png";
function Hero({ title, img }) {
  return (
    <div>
      <img src={img} className="homeIm" />
      <h1 className="h111">{title}</h1>
    </div>
  );
}

export default Hero;
