import React from "react";
import "./About.css";
import NavBar from "../../components/nav/NavBar";
import about from "./../../assets/images2/about-bg.png";
import Hero from "../../components/nav/Hero";
import Footer from "../../components/footer/Footer";
import PromotionAbout from "./PromotionAbout";
import Vidoe from "./Vidoe";
import Tourim from "./../../assets/images2/TourPlans-img.png";
import promotion from "./../../assets/images2/promotion_img.png";
import ContainerAbout from "./ContainerAbout";
let paraOne = `  Et labore harum non nobis ipsum eum molestias mollitia et corporis
 praesentium a laudantium internos. Non quis eius quo eligendi corrupti
 et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
 illum aut optio quibusdam!`;

let paraTwo = `Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.`;

function About() {
  return (
    <div>
      <NavBar
        menu={[
          { title: "Home", path: "/" },
          { title: "About", path: "/about" },
          { title: "Packages", path: "/packages" },
          { title: "Services", path: "/services" },
        ]}
      />
      {/* <NavBar menu={["Home", "About", "Services", "Packages"]} path="/About" /> */}
      <Hero title="About Us: The Essence of Our Purpose" img={about} />

      <PromotionAbout>
        <ContainerAbout
          img={promotion}
          title="Promotion"
          para={paraOne}
          hone="We Provide You Best Europe Sightseeing Tours"
          btn={true}
        />
      </PromotionAbout>
      <Vidoe />
      <PromotionAbout>
        <ContainerAbout
          img={Tourim}
          title="Trend"
          para={paraTwo}
          hone="Our Popular Tour Plans"
          reverce={true}
          percent={true}
        />
      </PromotionAbout>

      <Footer />
    </div>
  );
}

export default About;
