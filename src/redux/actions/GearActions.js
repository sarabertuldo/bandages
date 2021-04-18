export const SET_GEAR = "Set Gear";

export function setGear(gear) {
  return { type: SET_GEAR, gear: { ...gear } };
}
