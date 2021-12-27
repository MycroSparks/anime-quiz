import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = React.createContext<{
  points: number;
  setPoints: (value: number) => void;
  correctGuesses: number;
  setCorrectGuesses: (value: number) => void;
}>({
  points: 0,
  setPoints: () => {},
  correctGuesses: 0,
  setCorrectGuesses: () => {},
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [points, setPoints] = useState<number>(-1);
  const [correctGuesses, setCorrectGuesses] = useState<number>(0);

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
      value={{ points, setPoints, correctGuesses, setCorrectGuesses }}
    >
      {children}
    </AppContext.Provider>
  );
};
