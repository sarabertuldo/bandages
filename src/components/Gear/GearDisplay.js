import React from "react";

const GearDisplay = ({ gear, deleteGear, toggleOnTour, changeInsured }) => {
  return (
    <>
      <div className={"gear-item"}>
        <button className={"gear-delete"} onClick={() => deleteGear(gear.id)}>
          &times;
        </button>
        <div className={"gear-name"}>
          <strong>{gear.bandmate}</strong>
          <div className={"gear-item-name"}>{gear.item}</div>
          <div className={"gear-notes"}>
            <div className={"gear-note-title"}>Notes:</div>
            {gear.notes}
          </div>
        </div>

        <label
          className={
            gear.insured
              ? "gear-checkbox gear-checkbox-checked"
              : "gear-checkbox"
          }
          htmlFor={"insured_checkbox_" + gear.id}
        >
          <input
            name="insured-checkbox"
            type="checkbox"
            id={"insured_checkbox_" + gear.id}
            checked={gear.insured}
            onChange={() => changeInsured(gear.id)}
          />
          Insured
        </label>
        <label
          className={
            gear.on_tour
              ? "gear-checkbox gear-checkbox-checked"
              : "gear-checkbox"
          }
          htmlFor={"ontour_checkbox_" + gear.id}
        >
          <input
            name="ontour-checkbox"
            id={"ontour_checkbox_" + gear.id}
            type="checkbox"
            checked={gear.on_tour}
            onChange={() => toggleOnTour(gear.id)}
          />
          On Tour
        </label>
      </div>
    </>
  );
};
export default GearDisplay;
