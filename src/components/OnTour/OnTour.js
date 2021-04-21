import React, { useContext } from "react";
import GearDisplay from "../Gear/GearDisplay";
import { GearContext } from "../../shared/GearContext";

const OnTour = () => {
  const gear = useContext(GearContext);
  const tourGear = gear.value.filter((gear) => gear.on_tour);
  return (
    <>
      <h1>On Tour</h1>

      <img src="https://i.ibb.co/zQY4MqD/minivan-final.jpg" alt="Vrooooom" />
      <div>
        {tourGear.map((g) => (
          <GearDisplay gear={g} {...gear} />
        ))}
      </div>
    </>
  );
};

export default OnTour;
