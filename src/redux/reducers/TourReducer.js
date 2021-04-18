import { ADD_TOUR, DELETE_TOUR } from "../actions";

function tourReducer(state = [], action) {
  switch (action.type) {
    case ADD_TOUR:
      return [...state, action.onTour];
    case DELETE_TOUR:
      let newState = [...state];
      let idx = newState.findIndex((gear) => gear.id === action.id);
      newState.splice(idx, 1);
      return newState;
    default:
      return state;
  }
}
export default tourReducer;
