export default function tourReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_VAN:
      return [...state, action.onTour];
    case REMOVE_FROM_VAN:
      return state.filter((val) => val.id !== action.id);
    default:
      return state;
  }
}
