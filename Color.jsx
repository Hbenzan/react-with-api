import React from "react";

const Colors = ({ data }) => {
  return (
    <>
      {data && data.map((d) => {
        return (
            //making color of text black
          <div className="card" key={d.id} style={{ background: d.color, color: "black" }}>
            <div className="container">
              <h1><b>{d.name}</b></h1>
              <p>{d.color}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Colors;