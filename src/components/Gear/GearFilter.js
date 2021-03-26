import React, { useContext, useMemo, useState } from "react";
import { GearContext } from "../../shared/GearContext";
import GearDisplay from "./GearDisplay";
import "./Gear.css";

const GearFilter = (props) => {
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState("bandmate");
  const [sortOrder, setSortOrder] = useState(1);
  const gear = useContext(GearContext);

  const tourGear = useMemo(() => {
    return props.onTour.map((gear) => gear.item);
  }, [props.onTour]);

  // map in my gear filter

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
        <button onClick={() => gear.clear()}>Clear All</button>
      </div>
      <div>
        {gear.value
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
                deleteGear={gear.delete}
                changeInsured={gear.changeInsured}
                addToVan={gear.addToVan}
                removeFromVan={gear.removeFromVan}
                onTour={tourGear.includes(gear.item)}
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

{
  /* <div>
<GearFilter
  gear={props.gear}
  bandmate={props.bandmate}
  notes={props.notes}
  onTour={tourGear.includes(props.item)}
  deleteFromVan={props.deleteFromVan}
  addToVan={props.addToVan}
/>
</div> 
Lines 73-75 delete?}*/
}
