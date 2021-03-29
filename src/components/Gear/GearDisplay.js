import React from "react";
import "./Gear.css";

const GearDisplay = ({
  gear,
  changeInsured,
  addToVan,
  removeFromVan,
  deleteGear,
  onTour,
}) => {
  const [state, dispatch] = useContext(GearContext);

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
