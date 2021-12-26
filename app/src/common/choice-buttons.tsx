import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

interface Props {
  answers: string[];
  onPick: (correctGuess: boolean) => void;
  correctAnswerIndex: number;
}

export const ChoiceButtons: React.FC<Props> = ({
  answers,
  onPick,
  correctAnswerIndex,
}) => {
  const [guessedIndex, setGuessedIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {answers.map((answer, index) => (
        <Button
          key={answer}
          color={
            guessedIndex !== undefined
              ? correctAnswerIndex === index
                ? "green"
                : guessedIndex === index
                ? "red"
                : "black"
              : "black"
          }
          compact
          style={{
            width: "44%",
            margin: 10,
          }}
          mode="contained"
          onPress={() => {
            if (guessedIndex === undefined) {
              onPick(index === correctAnswerIndex);
              setGuessedIndex(index);
            }
          }}
        >
          {answer}
        </Button>
      ))}
    </View>
  );
};
