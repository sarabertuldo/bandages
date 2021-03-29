import React from "react";
import "./OnTour.css";
import GearDisplay from "../Gear/GearDisplay";

const OnTour = (props) => {
  return (
    <>
      <h1>On Tour</h1>

      <img
        src="https://cdn.hswstatic.com/gif/how-to-draw-cars-31.jpg"
        alt="Van"
      />

      {props.onTour.map((g) => (
        <GearDisplay
          key={g.id}
          gear={g}
          onTour={true}
          deleteFromVan={props.deleteFromVan}
        />
      ))}
    </>
  );
};

export default OnTour;
