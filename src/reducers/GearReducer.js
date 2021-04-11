export default function gearReducer(state, action) {
  switch (action.type) {
    case "ADD_GEAR":
      return {
        gear: [...state.gear, action.payload],
      };
    case "DELETE_GEAR":
      let newArr = state.gear.filter((val) => val.id !== action.id);
      return { gear: newArr };
    case "CHANGE_INSURED":
      return state.gear.map((val) => {
        if (action.id === val.id) {
          return { ...val, completed: !val.completed };
        }
        return val;
      });
    case "CLEAR_GEAR":
      return { gear: [] };
    default:
      throw new Error();
  }
}
