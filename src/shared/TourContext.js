import React, { useReducer } from "react";

export const TourContext = React.createContext();

export const TourProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TourContext.Provider value={[state, dispatch]}>
      <OnTour />
    </TourContext.Provider>
  );
};

export default TourProvider;
