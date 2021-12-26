import React, { useState } from "react";

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
  const [points, setPoints] = useState<number>(0);
  const [correctGuesses, setCorrectGuesses] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{ points, setPoints, correctGuesses, setCorrectGuesses }}
    >
      {children}
    </AppContext.Provider>
  );
};
