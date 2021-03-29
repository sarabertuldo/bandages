import React from "react";
import { useArray } from "../hooks/useArray";

// const initialState = {
//   onTour: [],
//   gear: {
//     id: null,
//     bandmate: "",
//     item: "",
//     notes: "",
//     insured: false,
//   },
// };

const initialState = [
  {
    id: 1,
    insured: true,
    bandmate: "Alex",
    item: "Fender Precision",
    notes: "Purchased 2015",
  },
  {
    id: 2,
    insured: false,
    bandmate: "Sara",
    item: "Roland Juno-60",
    notes: "Purchased 2015",
  },
  {
    id: 3,
    insured: true,
    bandmate: "Matt",
    item: "Gibson Firebird",
    notes: "Purchased 2015",
  },
  {
    id: 4,
    insured: false,
    bandmate: "Nate",
    item: "Gretsch Catalina Club",
    notes: "Purchased 2015",
  },
  {
    id: 5,
    insured: false,
    bandmate: "Sara",
    item: "Fender Jaguar",
    notes: "Purchased 2015",
  },
  {
    id: 6,
    insured: false,
    bandmate: "Matt",
    item: "Dave Smith Pro2",
    notes: "Purchased 2015",
  },
];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_GEAR":
//       return {
//         gear: [...state.gear, action.payload],
//       };
//     case "DEL_GEAR":
//       return {
//         gear: state.gear.filter((gear) => gear.id !== action.payload),
//       };
//   }
// };

export const GearContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GEAR":
      return {
        gear: [...state.gear, action.payload],
      };

    default:
      throw new Error();
  }
};
export const GearProvier = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GearContext.Provider value={[state, dispatch]}>
      {props.children}
    </GearContext.Provider>
  );
};

export default GearProvider;
