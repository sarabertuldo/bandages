import React, { useContext, useState } from "react";
import GearFilter from "./GearFilter";
import "./Gear.css";
import { GearContext } from "../../shared/GearContext";

const GearList = (props) => {
  const [bandmate, setBandmate] = useState("");
  const [item, setItem] = useState("");
  const [notes, setNotes] = useState("");
  const [id, setId] = useState([7]);
  // const [state, dispatch] = useContext(GearContext);
  const gearState = useContext(GearContext);
  const gear = gearState.value.gears;

  return (
    <>
      <h1 className="center">Gear List:</h1>
      <div>
        <label htmlFor="bandmate"></label>
        <input
          id="bandmate"
          className="bandmate"
          value={bandmate}
          placeholder="Name"
          onChange={(e) => setBandmate(e.target.value)}
          type="text"
        />

        <label htmlFor="item"></label>
        <input
          id="item"
          value={item}
          placeholder="Item"
          onChange={(e) => setItem(e.target.value)}
          type="text"
        />
        <label htmlFor="notes"></label>
        <input
          id="notes"
          value={notes}
          placeholder="Notes"
          onChange={(e) => setNotes(e.target.value)}
          type="text"
        />
      </div>
      <p className="center">
        {bandmate} {item} {notes}
      </p>
      <div className="center">
        <button
          className="display"
          type="submit"
          value="addGear"
          onClick={() => {
            let newGear = { id, item, notes, insured: false, bandmate };
            if (gear) {
              gear.add(newGear);
              setId(id + 1);
              setBandmate("");
              setItem("");
              setNotes("");
            }
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <GearFilter />
      </div>
    </>
  );
};

export default GearList;
