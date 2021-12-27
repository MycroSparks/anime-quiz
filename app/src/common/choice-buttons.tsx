import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Answer } from "./questions";

interface Props {
  answers: Answer[];
  onPick: (correctGuess: boolean) => void;
}

export const ChoiceButtons: React.FC<Props> = ({ answers, onPick }) => {
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
          key={answer.text}
          color={
            guessedIndex !== undefined
              ? answer.correct
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
              onPick(!!answer.correct);
              setGuessedIndex(index);
            }
          }}
        >
          {answer.text}
        </Button>
      ))}
    </View>
  );
};
