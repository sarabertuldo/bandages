import React, { useContext } from "react";
import "./OnTour.css";
import GearDisplay from "../Gear/GearDisplay";
import { GearContext } from "../../shared/GearContext";

const OnTour = () => {
  const gear = useContext(GearContext);
  const onTourGear = gear.value.filter((gear) => gear.onTour);
  return (
    <>
      <h1>On Tour</h1>

      <img
        src="https://cdn.hswstatic.com/gif/how-to-draw-cars-31.jpg"
        alt="Vrooooom"
      />
      <div>
        {onTourGear.map((gear) => (
          <GearDisplay gear={gear} />
        ))}
      </div>
    </>
  );
};

export default OnTour;
