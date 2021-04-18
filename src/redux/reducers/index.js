import { combineReducers } from "redux";
import tourReducer from "./TourReducer";
import userReducer from "./UserReducer";
import gearReducer from "./GearReducer";

const rootReducer = combineReducers({
  user: userReducer,
  onTour: tourReducer,
  gear: gearReducer,
});

export default rootReducer;
