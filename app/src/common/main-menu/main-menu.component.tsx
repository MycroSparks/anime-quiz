import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { Button, Headline } from "react-native-paper";
import { RootStackParamList } from "../navigation/navigator.component";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFocusEffect } from "@react-navigation/native";
import { backgrounds } from "../../core/app-context/app-context.provider";
import { useAppContext } from "../../core/app-context/app-context.hook";

export const MainMenu: React.FC<
  NativeStackScreenProps<RootStackParamList, "MainMenu">
> = ({ navigation }) => {
  const { updateTheme, backgroundIndex, setBackgroundIndex } = useAppContext();

  useEffect(() => {
    const selectedBackground = backgrounds[backgroundIndex];
    const updatedTheme = {
      colors: {
        primary: selectedBackground.darkPrimary ? "#000000" : "#ffffff",
        text: backgrounds[backgroundIndex].darkText ? "#000000" : "#ffffff",
      },
    };
    updateTheme(updatedTheme);
  }, [backgroundIndex]);

  useFocusEffect(
    useCallback(() => {
      setBackgroundIndex(Math.floor(Math.random() * backgrounds.length));

      return () => {
        // console.log("Unfocused?");
      };
    }, [backgrounds.length])
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Headline style={{ textAlign: "center", fontWeight: "bold" }}>
          Anime Quiz
        </Headline>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          style={{ marginHorizontal: 20 }}
          mode="contained"
          onPress={() => navigation.navigate("GameModeMenu", {})}
        >
          Start
        </Button>
      </View>
    </View>
  );
};
