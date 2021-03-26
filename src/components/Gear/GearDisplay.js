import React from "react";
import "./Gear.css";

const GearDisplay = ({
  gear,
  onTour,
  deleteGear,
  addToVan,
  removeFromVan,
  changeInsured,
}) => {
  return (
    <>
      <div>
        {gear.bandmate} {gear.item} {gear.notes}
        <input
          type="checkbox"
          checked={gear.insured}
          onClick={() => changeInsured(gear.id)}
        />
        {!onTour && (
          <button onClick={() => addToVan(gear)}> Send to Van</button>
        )}
        {onTour && (
          <button onClick={() => removeFromVan(gear.id)}>
            {" "}
            Remove from Van
          </button>
        )}
        {/* <button onClick={() => addToVan(gear.id)}>Send to Van</button> */}
        <button onClick={() => deleteGear(gear.id)}>x</button>
      </div>
    </>
  );
};

export default GearDisplay;
