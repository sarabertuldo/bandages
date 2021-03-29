import React, { useReducer } from "react";
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

const initialState = {
  gear: [
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
  ],
};

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
    case "DELETE_GEAR":
      let newArr = state.gear.filter((val) => val.id !== action.id);
      return { gear: newArr };
    case "CHANGE_INSURED":
      return state.gear.map((val) => {
        if (action.id === val.id) {
          return { ...val, completed: !val.completed };
        }
        return val;
      });
    case "CLEAR_GEAR":
      return { gear: [] };
    default:
      throw new Error();
  }
};
export const GearProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GearContext.Provider value={[state, dispatch]}>
      {props.children}
    </GearContext.Provider>
  );
};

export default GearProvider;
