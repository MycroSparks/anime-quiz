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
      <View style={{ flex: 2, alignItems: "center" }}>
        <Headline style={{ textAlign: "center", fontWeight: "bold" }}>
          You got {correctGuesses} out of {totalQuestions} questions right!
        </Headline>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Button
          style={{ marginHorizontal: 20 }}
          onPress={onConfirm}
          mode="contained"
        >
          Ok
        </Button>
      </View>
    </View>
  );
};
