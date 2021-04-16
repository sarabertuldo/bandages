import React, { useState, useMemo, useContext } from "react";
import GearDisplay from "./GearDisplay";
import { GearContext } from "../../shared/GearContext";

const GearFilter = () => {
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState("bandmate");
  const [sortOrder, setSortOrder] = useState(1);
  const gear = useContext(GearContext);

  const gearOnTour = useMemo(() => {
    return gear.onTour.map((gear) => gear.id);
  }, [gear.onTour]);

  return (
    <>
      <div className="center">
        <input
          className="display"
          value={filter}
          placeholder="Filter"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>

      <div className="center display">
        <label>Sort</label>
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value="id">ID</option>
          <option value="bandmate">Bandmate</option>
          <option value="item">Item</option>
        </select>

        <label>Order</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="1">A-Z</option>
          <option value="-1">Z-A</option>
        </select>
      </div>
      <div className="center display">
        <button onClick={() => gear.clear()}>Clear All Gear</button>
      </div>

      <div className="title-bar">
        <strong>Bandmate Item Notes Insured</strong>
      </div>

      <div className="listArea">
        {gear.value
          .filter((val) => {
            let filterLC = filter.toLowerCase();
            let bandmate = val.bandmate.toLowerCase();
            let itemLC = val.item.toLowerCase();
            return bandmate.includes(filterLC) || itemLC.includes(filterLC)
              ? true
              : false;
          })
          .sort((a, b) => {
            if (sortKey === "id") {
              return (a.id - b.id) * sortOrder;
            }
            if (a[sortKey].toLowerCase() < b[sortKey].toLowerCase()) {
              return -1 * sortOrder;
            }
            if (a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) {
              return 1 * sortOrder;
            }
            return 0;
          })
          .map((g, index) => {
            return (
              <GearDisplay
                deleteGear={gear.delete}
                changeInsured={gear.changeInsured}
                onTour={gear.onTour}
                addOnTour={gear.addOnTour}
                deleteOnTour={gear.deleteOnTour}
                gear={g}
                key={index}
              />
            );
          })}
      </div>
    </>
  );
};

export default GearFilter;
