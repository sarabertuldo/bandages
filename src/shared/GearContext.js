import React from "react";
import { useArray } from "../hooks/useArray";

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
    onTour: false,
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
  {
    id: 7,
    insured: true,
    bandmate: "Sara",
    item: "Fender Jaguar",
    notes: "olympic white",
    onTour: true,
  },
  {
    id: 8,
    insured: false,
    bandmate: "Matt",
    item: "Gibson Firebird",
    notes: "gift from Sara",
    onTour: true,
  },
];

export const GearContext = React.createContext();

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
