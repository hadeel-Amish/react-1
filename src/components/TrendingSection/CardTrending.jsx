import React from "react";
import "./CardTrendingStyle.css";
import iconone from "./../../assets/images/icon.png";
import icontwo from "./../../assets/images/icon-2.png";
import star from "./../../assets/images/bi_star-fill.png";
function CardTrending({ img, title, icon, flag }) {
  return (
    <div className="CardTrend">
      <div className="imgs">
        <img src={img} />
      </div>
      <div className="flag">
        <img src={flag} />
      </div>
      <div className="icons">
        <div className="icon-1">
          <img src={iconone} />

          <p>8 days</p>
        </div>
        <div className="icon-1">
          <img src={icontwo} />
          <p>30 People going</p>
        </div>
      </div>
      <div className="title">
        <h2> {title}</h2>
        <div className="star">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
      </div>

      <div className="para">
        Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia
        amet id quod eligendi. Et labore harum non nobis ipsum eum molestias
        mollitia et corporis praesentium a laudantium internos.
      </div>
      <div className="bttn">
        <a href="">Explore Now</a>
      </div>
    </div>
  );
}

export default CardTrending;
