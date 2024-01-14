import React from "react";
import "./TrendingStyle.css";
import CardTrending from "./CardTrending";
import imgone from "./../../assets/images/n1.png";
import imgtwo from "./../../assets/images/n2.png";
import imgthree from "./../../assets/images/n3.png";
import flagOne from "./../../assets/images/flag-1.png";
import flagTwo from "./../../assets/images/flag-2.png";
import flagthree from "./../../assets/images/flag-3.png";

const trending = [
  { image: imgone, title: "Switzerland", flag: flagOne },
  { image: imgtwo, title: "Amazon", flag: flagTwo },
  { image: imgthree, title: "Giza", flag: flagthree },
];

function Trending() {
  return (
    <div className="Trending">
      <h1>Our Trending Tour Packages</h1>
      <div className="pirent">
        {trending.map((el) => {
          return (
            <CardTrending img={el.image} title={el.title} flag={el.flag} />
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
