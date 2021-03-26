import React from "react";
import "./Gear.css";

const GearDisplay = ({ gear, deleteGear, addToVan, changeInsured }) => {
  return (
    <>
      <div>
        {gear.bandmate} - {gear.item} {gear.notes}
        <input
          type="checkbox"
          checked={gear.insured}
          onClick={() => changeInsured(gear.id)}
        />
        <button onClick={() => addToVan(gear.id)}>Send to Van</button>
        <button onClick={() => deleteGear(gear.id)}>x</button>
      </div>
    </>
  );
};

export default GearDisplay;
