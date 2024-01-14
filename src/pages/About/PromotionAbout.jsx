import React from "react";
import "./PromotionAbout.css";

function Promotion({ children }) {
  return <div className="perantAbout">{children}</div>;
}

export default Promotion;

// import React from "react";
// import "./PromotionAbout.css";
// import promotion from "./../../assets/images2/promotion_img.png";

// function Promotion({ children }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginLeft: "40px",
//       }}
//     >
//       <div className="left">
//         <h4 className="title">Promotion</h4>
//         <h1>We Provide You Best Europe Sightseeing Tours</h1>
//         <p className="para">
//           Et labore harum non nobis ipsum eum molestias mollitia et corporis
//           praesentium a laudantium internos. Non quis eius quo eligendi corrupti
//           et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
//           illum aut optio quibusdam!
//         </p>
//         <div className="botton">
//           <a href="">View Packages</a>
//         </div>
//       </div>
//       <div className="right">
//         <img src={promotion} alt="" />
//       </div>
//     </div>
//   );
// }

// export default Promotion;
