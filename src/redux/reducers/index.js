import { combineReducers } from "redux";
import tourReducer from "./TourReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  onTour: tourReducer,
});

export default rootReducer;
