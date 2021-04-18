import { SET_GEAR } from "../actions";

const initialState = [];

export default function gearReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GEAR:
      return { ...action.gear };
    default:
      return state;
  }
}
