import React, { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../theme/theme.constant";
import { Theme } from "react-native-paper/lib/typescript/types";
import { DefaultTheme } from "react-native-paper";

export const AppContext = React.createContext<{
  points: number;
  setPoints: (value: number) => void;
  correctGuesses: number;
  setCorrectGuesses: (value: number) => void;
  customTheme: Theme;
  updateTheme: (updatedTheme: any) => void;
}>({
  points: 0,
  setPoints: () => {},
  correctGuesses: 0,
  setCorrectGuesses: () => {},
  customTheme: { ...DefaultTheme },
  updateTheme: () => {},
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [points, setPoints] = useState<number>(-1);
  const [correctGuesses, setCorrectGuesses] = useState<number>(0);
  const [customTheme, setCustomTheme] = useState(theme);

  const updateTheme = (updatedTheme: any) => {
    setCustomTheme({ ...theme, ...updatedTheme });
  };

  useEffect(() => {
    if (points === -1) {
      return;
    }
    AsyncStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  useEffect(() => {
    (async () => {
      const savedPoints = await AsyncStorage.getItem("points");
      if (!savedPoints) {
        setPoints(0);
        return;
      }
      setPoints(JSON.parse(savedPoints));
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        points,
        setPoints,
        correctGuesses,
        setCorrectGuesses,
        customTheme,
        updateTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
