import { useCallback, useState } from "react";
export const useArray = (initialValue) => {
  // console.log(initialValue);
  const [value, setValue] = useState(initialValue);
  const [onTour, setOnTour] = useState([]);

  return {
    value,
    onTour,
    addToVan: useCallback((toSetOnTour) =>
      setOnTour((onTour) => [...onTour, toSetOnTour])
    ),
    removeFromVan: useCallback((toRemoveFromVan) =>
      setOnTour((onTour) => [...onTour, toRemoveFromVan])
    ),
    edit: useCallback((toEdit) => setValue((value) => [...value, toEdit])),
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
