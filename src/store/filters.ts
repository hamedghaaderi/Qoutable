import { create } from "zustand";

const useFilter = create((set) => ({
  qoute: "",
  author: "",
  tag: "",
  action: {
    setQoute: (_value: string) => {
      return set(() => ({
        qoute: _value,
      }));
    },
    setAuthor: (_value: string) => {
      return set(() => ({
        author: _value,
      }));
    },
    setTag: (_value: string) => {
      return set(() => ({
        tag: _value,
      }));
    },
  },
}));

export default useFilter;
