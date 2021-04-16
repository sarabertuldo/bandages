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
    bandmate: "Matt",
    item: "ZVEX Machine",
    notes: "purchased 2016",
    onTour: false,
  },
  {
    id: 2,
    insured: false,
    bandmate: "Alex",
    item: "Fender Precision Bass",
    notes: "olympic white",
    onTour: true,
  },
  {
    id: 3,
    insured: true,
    bandmate: "Sara",
    item: "Moog Minitaur",
    notes: "Serial No. MT08645",
    onTour: false,
  },
  {
    id: 4,
    insured: false,
    bandmate: "Alex ",
    item: "Aguilar TH350",
    notes: "purchased at Midwood Guitar Studio",
    onTroue: true,
  },
  {
    id: 5,
    insured: false,
    bandmate: "Nate ",
    item: "Ludwig Vistalite Drum Kit",
    notes: "transparent dark red",
    onTour: true,
  },
  {
    id: 6,
    insured: false,
    bandmate: "Matt",
    item: "Orange AD140",
    notes: "Serial No. 1350-08-04",
    onTour: false,
  },
];

export const GearContext = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_GEAR":
//       return {
//         gear: [...state.gear, action.payload],
//       };
//     case "DELETE_GEAR":
//       let newArr = state.gear.filter((val) => val.id !== action.id);
//       return { gear: newArr };
//     case "CHANGE_INSURED":
//       return state.gear.map((val) => {
//         if (action.id === val.id) {
//           return { ...val, completed: !val.completed };
//         }
//         return val;
//       });
//     case "CLEAR_GEAR":
//       return { gear: [] };
//     default:
//       throw new Error();
//   }
// };
export const GearProvider = (props) => {
  // const [state, dispatch] = useArray([]);
  // const [value, setValue] = useArray(initialValue);
  // const [onTour, setOnTour] = useArray([]);
  const gear = useArray(initialState);
  return (
    <GearContext.Provider value={gear}>
      {/* <GearContext.Provider value={[state, dispatch]}> */}
      {props.children}
    </GearContext.Provider>
  );
};

export default GearProvider;
