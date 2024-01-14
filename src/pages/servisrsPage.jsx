import React from "react";
import NavBar from "../components/nav/NavBar";
import Servisrs from "./../assets/images2/city-6.png";
import Hero from "../components/nav/Hero";
import Footer from "../components/footer/Footer";

function ServisrsPage() {
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
        path="/Services"
      /> */}
      <Hero
        title="Service Excellence: Delivering Exceptional Customer Experiences"
        img={Servisrs}
      />
      <Footer />
    </div>
  );
}

export default ServisrsPage;
