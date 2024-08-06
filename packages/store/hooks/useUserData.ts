import { useRecoilValue } from "recoil";
import { UserAtom } from "../src/atoms";

export const useUserData = () => {
  const data = useRecoilValue(UserAtom);

  return data;
};
