import React from "react";
import "./Foot-two.css";

export default function FootTwo({ title, para }) {
  return (
    <>
      <div className="footTwo">
        <h3>{title}</h3>
        <div className="paragraph">
          {para?.map((e) => (
            <p>{e}</p>
          ))}
        </div>
      </div>
    </>
  );
}

// {para.map((e) => {
//   return <p className="list">{e}</p>;
// })}
