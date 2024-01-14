import React from "react";
import "./ServicesStyle.css";
import CardServices from "./CardServices";
import one from "./../../assets/images/service-1.png";
import two from "./../../assets/images/service-2.png";
import three from "./../../assets/images/service-3.png";
import four from "./../../assets/images/service-4.png";

const servicesData = [
  {
    title: "Guided Tours",
    image: one,
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    title: "Best Flights Options",
    image: two,
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    title: "Religious Tours",
    image: three,
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    title: "Medical insurance",
    image: four,
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
];
function Services() {
  return (
    <>
      <h1 className="h1-ser">We Offer Best Services</h1>
      <div className="card">
        {servicesData.map((el) => {
          return (
            <CardServices
              img={el.image}
              title={el.title}
              des={el.description}
            />
          );
        })}

        {/* <CardServices img={one} title="Guided Tours" />
        <CardServices img={two} title="Best Flights Options" />
        <CardServices img={three} title="Religious Tours" />
        <CardServices img={four} title="Medical insurance" /> */}
      </div>
    </>
  );
}

export default Services;
