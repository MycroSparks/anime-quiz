import React from "react";
import { View } from "react-native";
import { Button, Headline } from "react-native-paper";

interface Props {
  onStart: () => void;
}

export const StartScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, alignItems: "center", marginTop: 80 }}>
        <Headline style={{ color: "white", fontWeight: "bold" }}>
          Anime Quiz
        </Headline>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          style={{ width: "80%" }}
          mode="contained"
          onPress={onStart}
          color={"black"}
        >
          Start
        </Button>
      </View>
    </View>
  );
};
