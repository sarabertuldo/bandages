import { useCallback, useState } from "react";
export const useArray = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [onTour, setOnTour] = useState([]);
  return {
    value,
    onTour,
    toggleOnTour: useCallback((id) =>
      setOnTour((arr) => {
        let newArr = arr.map((val) => {
          if (val.id === id) {
            return { ...val, onTour: !val.onTour };
          }
          return val;
        });
        return newArr;
      })
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
