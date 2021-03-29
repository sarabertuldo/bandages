import React, { useContext } from "react";
import { GearContext } from "../../shared/GearContext";
import "./Gear.css";

const GearDisplay = ({
  gear,
  changeInsured,
  addToVan,
  removeFromVan,
  onTour,
}) => {
  const [state, dispatch] = useContext(GearContext);
  const deleteGear = (id) =>
    dispatch({
      type: "DELETE_GEAR",
      id: id,
    });

  return (
    <>
      <div>
        {/* props.gear.map((gear) */}
        {gear.bandmate} {gear.item} {gear.notes}
        <input
          type="checkbox"
          checked={gear.insured}
          onClick={() => changeInsured(gear.id)}
        />
        {!onTour && (
          <button onClick={() => addToVan(gear.addToVan)}> Send to Van</button>
        )}
        {onTour && (
          <button onClick={() => removeFromVan(gear.id)}>
            Remove from Van
          </button>
        )}
        <button onClick={() => deleteGear(gear.id)}>x</button>
      </div>
    </>
  );
};

export default GearDisplay;
