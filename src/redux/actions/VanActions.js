export const ADD_TO_VAN = "Add to Van";
export const DELETE_FROM_VAN = "Delete from Van";

export function addToVan(onTour) {
  return { type: ADD_TO_VAN, onTour: onTour };
}

export function removeFromVan(id) {
  return { type: DELETE_FROM_VAN, id: id };
}
