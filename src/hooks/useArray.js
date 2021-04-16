import { useCallback, useState } from "react";
export const useArray = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [onTour, setOnTour] = useState([]);
  return {
    value,
    onTour,
    addOnTour: useCallback((toSetOnTour) =>
      setOnTour((onTour) => [...onTour, toSetOnTour])
    ),
    deleteOnTour: useCallback((toDeleteOnTour) =>
      setOnTour((onTour) => [...onTour, toDeleteOnTour])
    ),
    deleteOnTour: useCallback((toDeleteOnTour) =>
      setOnTour((onTour) => [...onTour, toDeleteOnTour])
    ),
    add: useCallback((toAdd) => setValue((value) => [...value, toAdd])),
    changeInsured: useCallback((id) =>
      setValue((arr) => {
        let newArr = arr.map((val) => {
          if (val.id === id) {
            return { ...val, insured: !val.insured };
          }
          return val;
        });
        return newArr;
      })
    ),
    clear: useCallback(() => setValue([])),
    delete: useCallback((id) =>
      setValue((arr) => arr.filter((v) => v && v.id !== id))
    ),
  };
};
