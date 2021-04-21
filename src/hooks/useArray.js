import { useCallback, useState } from "react";
import axios from "axios";

export const useArray = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    all: useCallback(() => {
      axios.get("gear/all").then((res) => {
        setValue(res.data.data);
      });
    }),
    value,
    toggleOnTour: useCallback((id) => {
      let newValue = value.map((val) => {
        if (val.id === id) {
          return { ...val, on_tour: !val.on_tour };
        }
        return val;
      });
      axios
        .patch(
          "/gear/update",
          newValue.find((v) => v.id === id)
        )
        .then((data) => {
          setValue(newValue);
        });
    }),
    add: useCallback((toAdd) => {
      axios.post("/gear/add", toAdd).then((data) => {
        setValue((value) => [...value, toAdd]);
      });
    }),
    changeInsured: useCallback((id) => {
      setValue((arr) => {
        let newArr = arr.map((val) => {
          if (val.id === id) {
            return { ...val, insured: !val.insured };
          }
          return val;
        });
        return newArr;
      });
      axios
        .patch(
          "/gear/update",
          value.find((v) => v.id === id)
        )
        .then((data) => {
          console.log("data updated");
        });
    }),
    clear: useCallback(() => setValue([])),
    deleteGear: useCallback((id) => {
      axios
        .delete(`/gear/delete/:${id}`)
        .then((data) => setValue((arr) => arr.filter((v) => v && v.id !== id)));
    }),
  };
};
