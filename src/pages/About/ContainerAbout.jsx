import React from "react";

import "./ContainerAbout.css";

function ContainerAbout({ img, title, para, hone, reverce, btn, percent }) {
  return (
    <div
      className="container"
      style={{ flexDirection: reverce ? "row-reverse" : "row" }}
    >
      <div className="texts" style={{ maxWidth: "600px" }}>
        <p
          style={{
            color: "#DF6951",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "1.8px",
            marginBottom: "-15px",
          }}
        >
          {title}
        </p>
        <h1 className="hone">{hone}</h1>
        <p className="para">{para}</p>
        <div className="botton" style={{ display: btn ? "flex" : "none" }}>
          <a href="">View Packages</a>
        </div>
        <div className="percent" style={{ display: percent ? "flex" : "none" }}>
          <div className="percentchild">
            <p>78%</p>
            <h3>Vacations</h3>
          </div>
          <div className="percentchild">
            <p>55%</p>
            <h3>Honeymoon</h3>
          </div>
        </div>
      </div>
      <div className="imges" style={{ maxWidth: "500px" }}>
        <img src={img} alt="" style={{ maxWidth: "100%" }} />
        {/* <img src={img} alt="" style={{ margin: "0px 40px" }} /> */}
      </div>
    </div>
  );
}

export default ContainerAbout;
