import React from "react";
import { useArray } from "../hooks/useArray";

const initialState = [
  {
    id: 1,
    completed: true,
    bandmate: "Alex",
    item: "Fender Precision",
    notes: "Purchased 2015",
  },
  {
    id: 2,
    completed: false,
    bandmate: "Sara",
    item: "Roland Juno-60",
    notes: "Purchased 2015",
  },
  {
    id: 3,
    completed: true,
    bandmate: "Matt",
    item: "Gibson Firebird",
    notes: "Purchased 2015",
  },
  {
    id: 4,
    completed: false,
    bandmate: "Nate",
    item: "Gretsch Catalina Club",
    notes: "Purchased 2015",
  },
  {
    id: 5,
    completed: false,
    bandmate: "Sara",
    item: "Fender Jaguar",
    notes: "Purchased 2015",
  },
  {
    id: 6,
    completed: false,
    bandmate: "Matt",
    item: "Dave Smith Pro2",
    notes: "Purchased 2015",
  },
];

export const GearContext = React.createContext(null);

const GearProvider = (props) => {
  const gear = useArray(initialState);
  return (
    <GearContext.Provider value={gear}>{props.children}</GearContext.Provider>
  );
};

export default GearProvider;
