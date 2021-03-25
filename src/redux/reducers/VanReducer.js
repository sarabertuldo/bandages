import { ADD_TO_VAN, DELETE_FROM_VAN } from "../actions";

export default function vanReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_VAN:
      return [...state, action.onTour];
    case DELETE_FROM_VAN:
      return state.filter((val) => val.id !== action.id);
    default:
      return state;
  }
}
