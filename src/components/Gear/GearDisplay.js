import React from "react";

const GearDisplay = ({
  gear,
  deleteGear,
  toggleOnTour,
  isOnTour,
  changeInsured,
}) => {
  return (
    <>
      <div>
        {gear.bandmate} {gear.item} {gear.notes}
        <input
          type="checkbox"
          checked={gear.insured}
          onChange={() => changeInsured(gear.id)}
        />
        <button
          onClick={() => {
            toggleOnTour(gear.id);
            console.log("hi matt");
          }}
        >
          Add On Tour
        </button>
        {/* {!isOnTour && (
          <button
            onClick={() => {
              addTour(gear);
              console.log("what");
            }}
          >
            Add On Tour
          </button>
        )}
        {isOnTour && (
          <button onClick={() => deleteTour(gear.id)}>Remove On Tour</button>
        )} */}
        <button onClick={() => deleteGear(gear.id)}>x</button>
      </div>
    </>
  );
};
export default GearDisplay;
