import React from "react";
import "./PromotionStyle.css";
import ImdPromotion from "./ImdPromotion";
import imgone from "./../../assets/images/e1.png";
import imgtwo from "./../../assets/images/e2.png";
const prom = [
  { image: imgone, title: "Explore Nature" },
  { image: imgtwo, title: "Explore Cities" },
];

function Promotion() {
  return (
    <div className="cardPro">
      {prom.map((e) => {
        return <ImdPromotion img={e.image} title={e.title} />;
      })}
    </div>
  );
}

export default Promotion;
