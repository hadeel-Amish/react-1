import React from "react";
import "./CardPackage.css";
import star from "./../../assets/images2/Vector.png";

function CardPackage({ image, title, spanOne, spanTwo, num, icon }) {
  return (
    <div className="cardPackage">
      <div className="img">
        <img
          className="imagecard"
          src={image}
          style={{
            maxWidth: "346px",
            height: "223.96px",
            margin: "10px 10px 0 20px",
          }}
        />
      </div>
      <div className="span">
        <span className="spanone">{spanOne}</span>
        <span className="spantwo">{spanTwo}</span>
      </div>
      <div
        className="h"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <h1 className="titlepackge">{title}</h1>
      </div>
      <p className="pa">
        Qui tempore voluptate qui quia commodi rem praesentium alias et.
      </p>
      <div
        className="foot"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-around",
        // }}
      >
        <span className="num">{num}</span>
        <span className="icon">
          <img src={star} alt="" />
          {icon}
        </span>
      </div>
    </div>
  );
}

export default CardPackage;
