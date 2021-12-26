import { useContext } from "react";
import { AppContext } from "./app-context.provider";

export const useAppContext = () => {
  return useContext(AppContext);
};
