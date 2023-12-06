import React, { useState } from "react";
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
  backgroundIndex: number;
  setBackgroundIndex: (value: number) => void;
}>({
  points: 0,
  setPoints: () => {},
  correctGuesses: 0,
  setCorrectGuesses: () => {},
  customTheme: { ...DefaultTheme },
  updateTheme: () => {},
  backgroundIndex: 0,
  setBackgroundIndex: () => {},
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [points, setPoints] = useState<number>(0);
  const [correctGuesses, setCorrectGuesses] = useState<number>(0);
  const [customTheme, setCustomTheme] = useState(theme);
  const [backgroundIndex, setBackgroundIndex] = useState(
    Math.floor(Math.random() * backgrounds.length)
  );

  const updateTheme = (updatedTheme: any) => {
    setCustomTheme({ ...theme, ...updatedTheme });
  };

  // useEffect(() => {
  //   if (points === -1) {
  //     return;
  //   }
  //   //AsyncStorage.setItem("points", JSON.stringify(points));
  // }, [points]);

  // useEffect(() => {
  //   (async () => {
  //     const savedPoints = await AsyncStorage.getItem("points");
  //     if (!savedPoints) {
  //       setPoints(0);
  //       return;
  //     }
  //     setPoints(JSON.parse(savedPoints));
  //   })();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        points,
        setPoints,
        correctGuesses,
        setCorrectGuesses,
        customTheme,
        updateTheme,
        backgroundIndex,
        setBackgroundIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export interface CustomBackgroundImage {
  path: any;
  darkText?: boolean;
  darkPrimary?: boolean;
}

export const backgrounds: CustomBackgroundImage[] = [
  {
    path: require("../../assets/hisoka__hunter_x_hunter__minimalist_wallpaper_by_greenmapple17-d8imij3.png"),
    darkPrimary: true,
  },
  { path: require("../../assets/tokyo_ghoul.png") },
];
