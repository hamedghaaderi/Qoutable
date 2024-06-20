import { create } from "zustand";

const useValue = create((set) => ({
  value: "",
  action: {
    setValue: (_value: string) => {
      return set(() => ({
        value: _value,
      }));
    },
  },
}));

export default useValue;
