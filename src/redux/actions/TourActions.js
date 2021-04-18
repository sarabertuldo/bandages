export const ADD_TOUR = "Add Tour";
export const DELETE_TOUR = "Delete Tour";

export function addTour(gear) {
  return { type: ADD_TOUR, onTour: gear };
}

export function deleteTour(id) {
  return { type: DELETE_TOUR, id: id };
}
