import { atom } from "recoil";

export const chipState = atom({
  key: "chipState",
  default: Array.from({ length: 9 }, () => false),
});

export const isDisabledByChip = atom({
  key: "",
  default: true,
});
