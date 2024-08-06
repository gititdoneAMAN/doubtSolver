import { atom } from "recoil";

export const UserAtom = atom<number>({
  key: "user",
  default: 0,
});
