import React from "react";
import "./ImdPromotionStyle.css";
function ImdPromotion({ img, title }) {
  return (
    <div className="promotion">
      <img src={img} />
      <div className="postion">
        <h2>Promotion</h2>
        <h1>{title}</h1>
        <div className="btn">
          <a href="">View Packages</a>
        </div>
      </div>
    </div>
  );
}

export default ImdPromotion;
