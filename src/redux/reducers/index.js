import vanReducer from "./VanReducer";
import { combineReducers } from "redux";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  onTour: vanReducer,
  user: userReducer,
});

export default rootReducer;
