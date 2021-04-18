import React from "react";

export const initialState = {
  onTour: [],
  gearList: [],
  user: {
    username: "",
    id: null,
    role: "",
  },
};

export const UserContext = React.createContext(null);
