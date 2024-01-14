import React from "react";
import NavBar from "../components/nav/NavBar";
import Packages from "./../assets/images2/packages-bg.png";
import Hero from "../components/nav/Hero";
import Footer from "../components/footer/Footer";
import CardPackage from "./package/CardPackage";

import city1 from "./../assets/images2/city-1.png";
import city2 from "./../assets/images2/city-2.png";
import city3 from "./../assets/images2/city-3.png";
import city4 from "./../assets/images2/city-4.png";
import city5 from "./../assets/images2/city-5.png";
import city6 from "./../assets/images2/city-6.png";

const cardpackg = [
  {
    img: city1,
    spanOne: "27, September 2022",
    spanTwo: "120+ People",
    title: "Maldives",
    num: "3000 $",
    icon: "5.0",
  },
  {
    img: city2,
    spanOne: "13, October 2023",
    spanTwo: "120+ People",
    title: "Switzerland",
    num: "290 $",
    icon: "4.9",
  },
  {
    img: city3,
    spanOne: "2, November 2022",
    spanTwo: "139+ People",
    title: "Berlin",
    num: "2790 $",
    icon: "5.0",
  },
  {
    img: city4,
    spanOne: "4, December 2022",
    spanTwo: "50+ People",
    title: "Torronto",
    num: "1110 $",
    icon: "4.0",
  },
  {
    img: city5,
    spanOne: "20, September 2022",
    spanTwo: "80+ People",
    title: "Baku",
    num: "220 $",
    icon: "4.5",
  },
  {
    img: city6,
    spanOne: "27, August 2022",
    spanTwo: "100+ People",
    title: "Chinese",
    num: "2500 $",
    icon: "5.0",
  },
];
cardpackg.map((e) => {
  return <CardPackage />;
});

function PackagingPage() {
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
      {/* <NavBar
        menu={["Home", "About", "Services", "Packages"]}
        path="/Packages"
      /> */}
      <Hero title="Unveiling the Power of Bundled Offerings" img={Packages} />
      <div
        className="perentcard"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: " 20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cardpackg.map((e) => {
          return (
            <CardPackage
              image={e.img}
              title={e.title}
              spanOne={e.spanOne}
              spanTwo={e.spanTwo}
              num={e.num}
              icon={e.icon}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default PackagingPage;
