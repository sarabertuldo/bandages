import React, { useContext, useMemo, useState } from "react";
import { GearContext } from "../../shared/GearContext";
import GearDisplay from "./GearDisplay";
import "./Gear.css";

const GearFilter = () => {
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState("bandmate");
  const [sortOrder, setSortOrder] = useState(1);
  const [state, dispatch] = useContext(GearContext);

  // const tourGear = useMemo(() => {
  //   console.log(state);
  //   return state.gear.map((gear) => gear.item);
  // }, [state.gear]);
  const tourGear = [];
  console.log(state.gear);
  return (
    <>
      <div>
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
        <button onClick={() => console.log("clearing up gear hehhe")}>
          Clear All
        </button>
      </div>
      <div>
        {state.gear
          .filter((value) => {
            let filterLC = filter.toLowerCase();
            let bandmateLC = value.bandmate.toLowerCase();
            let itemLC = value.item.toLowerCase();
            return bandmateLC.includes(filterLC) || itemLC.includes(filterLC)
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
                onTour={tourGear.includes(g.onTour)}
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
