import React, { useContext, useMemo, useState } from "react";
import GearFilter from "./GearFilter";
import { connect } from "react-redux";
import { addToVan, deleteFromVan } from "../../redux/actions/";
import "./Gear.css";
import { GearContext } from "../../shared/GearContext";

const GearList = (props) => {
  const [bandmate, setBandmate] = useState("");
  const [item, setItem] = useState("");
  const [notes, setNotes] = useState("");
  const [id, setId] = useState([7]);
  const gear = useContext(GearContext);
  console.log(props);
  const tourGear = useMemo(() => {
    return props.onTour.map((gear) => gear.item);
  }, [props.onTour]);

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
            gear.add(newGear);
            setId(id + 1);
            setBandmate("");
            setItem("");
            setNotes("");
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <GearFilter
          gear={gear.gear}
          bandmate={gear.bandmate}
          notes={gear.notes}
          onTour={tourGear.includes(props.item)}
          deleteFromVan={gear.delete}
          addToVan={gear.add}
        />
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addToVan,
  deleteFromVan,
};

function mapStateToProps(state) {
  return {
    globalState: state,
    onTour: state.onTour,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GearList);
