import React from "react";
import { BackHandler, View } from "react-native";
import { Button, Headline } from "react-native-paper";

interface Props {
  onStart: () => void;
}

export const StartScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Headline style={{ textAlign: "center", fontWeight: "bold" }}>
          Anime Quiz
        </Headline>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          style={{ marginHorizontal: 20, marginVertical: 10 }}
          mode="contained"
          onPress={onStart}
        >
          Start
        </Button>
        <Button
          style={{ marginHorizontal: 20, marginVertical: 10 }}
          mode="contained"
          onPress={() => BackHandler.exitApp()}
        >
          Quit
        </Button>
      </View>
    </View>
  );
};
