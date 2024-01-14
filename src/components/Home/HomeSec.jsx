import React from "react";
import NavBar from "../nav/NavBar.jsx";
import "./HomeStyle.css";
import home from "./../../assets/images/header-bg.png";
import Hero from "../nav/Hero.jsx";
import Services from "../BestServices/Services.jsx";
import Promotion from "../SecPromotion/SectionPromotion.jsx";
import Trending from "../TrendingSection/Trending.jsx";
import Footer from "../footer/Footer.jsx";
function Home() {
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
      {/* <NavBar menu={["Home", "About", "Services", "Packages"]} path="/" /> */}
      <Hero
        title=" No matter where you’re going to, we’ll take you there"
        img={home}
      />
      <Services />
      <Promotion />
      <Trending />
      <Footer />
    </div>
  );
}

export default Home;
