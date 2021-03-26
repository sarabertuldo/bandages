export default function gearReducer(state, action) {
  switch (action.type) {
    case "Add Gear":
      return [...state, action.gear];
    case "Delete Gear":
      let newArr = state.filter((val) => val.id !== action.id);
      return newArr;

    case "Change Insured":
      return state.map((val) => {
        if (action.id === val.id) {
          return { ...val, insured: !val.insured };
        }
        return val;
      });
    case "Clear Gear":
      return [];
    default:
      return state;
  }
}
