import React from "react";
import "./Video.css";
import icon from "./../../assets/images2/ant-design_play-circle-filled (1).png";
import video from "./../../assets/images2/video-banner.png";

function Vidoe() {
  return (
    <div className="video" style={{ position: "relative" }}>
      <img src={video} className="one" style={{ maxWidth: "100%" }} />
      <h1 className="two">Wanderlust</h1>
      <img
        src={icon}
        className="three"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}

export default Vidoe;

// import React from "react";
// import "./Video.css";
// import icon from "./../../assets/images2/ant-design_play-circle-filled (1).png";
// import video from "./../../assets/images2/video-banner.png";

// function Vidoe() {
//   return (
//     <div className="video">
//       <div className="img">
//         <img src={video} alt="" />
//       </div>
//       <h1 style={{ zIndex: "2" }}>Wanderlust</h1>
//       <div className="icon">
//         <img src={icon} alt="" style={{ zIndex: "3" }} />
//       </div>
//     </div>
//   );
// }

// export default Vidoe;
