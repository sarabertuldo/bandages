import { useCallback, useState } from "react";
export const useArray = (initialValue) => {
  console.log(initialValue);
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onTour: useCallback((toOnTour) =>
      setValue((value) => [...value, toOnTour])
    ),
    addToVan: useCallback((toAddtoVan) =>
      setValue((value) => [...value, toAddtoVan])
    ),
    removeFromVan: useCallback((toRemoveFromVan) =>
      setValue((value) => [...value, toRemoveFromVan])
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
