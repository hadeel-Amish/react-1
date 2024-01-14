import React from "react";
import "./CardServises.css";
function CardServices({ img, title, des }) {
  return (
    <>
      <div className="card-1">
        <div className="card-2">
          <div className="img">
            <img src={img} />
          </div>
          <h2>{title}</h2>
          <p>{des}</p>
        </div>
      </div>
    </>
  );
}

export default CardServices;
