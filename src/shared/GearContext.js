import React from "react";
import { useArray } from "../hooks/useArray";

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

export const GearContext = React.createContext(null);

const GearProvider = (props) => {
  const gear = useArray(initialState);
  return (
    <GearContext.Provider value={gear}>{props.children}</GearContext.Provider>
  );
};

export default GearProvider;

import React from "react";

export const initialState = {
  favorites: [],
  search: [],
  user: {
    username: "",
    id: null,
    role: "",
  },
};

export const PokeContext = React.createContext(null);

// const initialState = [
//   { id: 1, caught: true, name: "Bulbasaur" },
//   { id: 2, caught: false, name: "Ivysaur" },
//   { id: 3, caught: true, name: "Venusaur" },
//   { id: 4, caught: false, name: "Charmander" },
//   { id: 5, caught: false, name: "Charmeleon" },
//   { id: 6, caught: false, name: "Charizard" },
//   { id: 7, caught: true, name: "Squirtle" },
//   { id: 8, caught: false, name: "Wartortle" },
//   { id: 9, caught: false, name: "Blastoise" },
// ];

// export const PokeContext = React.createContext(null);

// const PokeProvider = (props) => {
//   const pkmn = useArray(initialState);
//   return (
//     // props.children will have access to Provider
//     <PokeContext.Provider value={pkmn}>{props.children}</PokeContext.Provider>
//   );
// };

// export default PokeProvider;
