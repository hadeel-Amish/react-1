import React from "react";
import "./Foot-oneStyle.css";
import travel from "./../../assets/images/Travel.png";
import arrow from "./../../assets/images/Arrow 05.png";
import iconOne from "./../../assets/images/052-linkedin.png";
import iconTwo from "./../../assets/images/025-messenger.png";
import iconThree from "./../../assets/images/096-twitter.png";
import iconFour from "./../../assets/images/097-twoo.png";

function FootOne() {
  return (
    <div className="FootOne">
      <div className="logo">
        <div className="travel">
          <img src={travel} />
        </div>
        <div className="arrow">
          <img src={arrow} />
        </div>
      </div>
      <p>Travel helps companies manage payments easily.</p>
      <div className="icons">
        <img src={iconOne} />
        <img src={iconTwo} />
        <img src={iconThree} />
        <img src={iconFour} />
      </div>
    </div>
  );
}

export default FootOne;
