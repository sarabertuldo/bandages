import React, { useContext } from "react";
import { GearContext } from "../../shared/GearContext";
// import { reducer } from "../../shared/GearContext"
import "./Gear.css";

const GearDisplay = ({ addToVan, removeFromVan, changeInsured, onTour }) => {
  // const [state, dispatch] = useContext(GearContext);
  const gear = useContext(GearContext);

  // const deleteGear = (id) =>
  //   dispatch({
  //     type: "DELETE_GEAR",
  //     id: id,
  //   });

  // const changeInsured = (id) =>
  //   dispatch({
  //     type: "CHANGE_INSURED",
  //     id: id,
  //   });

  return (
    <>
      <div>
        {/* props.gear.map((gear) */}
        {gear.bandmate} {gear.item} {gear.notes}
        <input
          type="checkbox"
          checked={gear.insured}
          onClick={() => changeInsured(gear.changeInsured)}
        />
        {!onTour && (
          <button onClick={() => addToVan(gear.addToVan)}> Send to Van</button>
        )}
        {onTour && (
          <button onClick={() => removeFromVan(gear.id)}>
            Remove from Van
          </button>
        )}
        <button onClick={() => delete gear.delete}>x</button>
      </div>
    </>
  );
};

export default GearDisplay;
