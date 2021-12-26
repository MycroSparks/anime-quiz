import React from "react";
import { View } from "react-native";
import { Button, Headline } from "react-native-paper";

interface Props {
  onRestart: () => void;
}

export const EndScreen: React.FC<Props> = ({ onRestart }) => {
  return (
    <View style={{ flex: 2 }}>
      <View style={{ flex: 1, alignItems: "center", marginTop: 80 }}>
        <Headline style={{ color: "white", fontWeight: "bold" }}>
          You got X out of Y questions right!
        </Headline>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onPress={onRestart} mode="contained" color="black">
          Restart
        </Button>
      </View>
    </View>
  );
};
