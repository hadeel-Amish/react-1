import React from "react";
import FootOne from "./Foot-one.jsx";
import FootTwo from "./Foot-one.jsx";
import footer from "./../../assets/images/footer-bg.png";

import "./FooterStyle.css";
function Footer() {
  return (
    <div className="footer">
      <div className="posPerent">
        <img src={footer} className="posi" />
      </div>
      <div className="perant">
        <FootOne />
        <FootTwo
          title="Company"
          para={["About Us", "Careers", "Blog", "Pricing"]}
        />
        <FootTwo
          title="Destinations"
          para={["Maldives", "Los Angelas", "Las Vegas", "Torronto"]}
        />
      </div>
      <p className="footpar">Copyright @ Xpro 2023 All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
