// import { useState } from "react";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className="traffic-container">
      <div className="traffic-pole"></div>

      <div className="container">
        <div className="traffic-light">
          <div
            onClick={() => setSelectedColor("red")}
            className={"light red" + (selectedColor === "red" ? " glow" : "")}
          ></div>

          <div
            onClick={() => setSelectedColor("yellow")}
            className={
              "light yellow" + (selectedColor === "yellow" ? " glow" : "")
            }
          ></div>
          <div
            onClick={() => setSelectedColor("green")}
            className={
              "light green" + (selectedColor === "green" ? " glow" : "")
            }
          ></div>
        </div>
      </div>
    </div>
  );
}
