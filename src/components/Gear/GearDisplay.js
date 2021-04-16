import React from "react";

const GearDisplay = ({
  gear,
  deleteGear,
  addOnTour,
  onTour,
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
        <button onClick={() => addOnTour(gear.onTour)}>Add On Tour</button>
        <button onClick={() => deleteGear(gear.id)}>x</button>
      </div>
    </>
  );
};

export default GearDisplay;
