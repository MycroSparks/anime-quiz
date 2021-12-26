import React from "react";
import { View } from "react-native";
import { Button, Headline } from "react-native-paper";
import { useAppContext } from "../../core/app-context/app-context.hook";

interface Props {
  onConfirm: () => void;
  totalQuestions: number;
}

export const EndScreen: React.FC<Props> = ({ onConfirm, totalQuestions }) => {
  const { correctGuesses } = useAppContext();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, alignItems: "center", marginTop: 80 }}>
        <Headline style={{ color: "white", fontWeight: "bold" }}>
          You got {correctGuesses} out of {totalQuestions} questions right!
        </Headline>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{ width: "80%" }}
          onPress={onConfirm}
          mode="contained"
          color="black"
        >
          Ok
        </Button>
      </View>
    </View>
  );
};
