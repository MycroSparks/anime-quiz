import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Option } from "../core/global/question/question.constant";

interface Props {
  answers: Option[];
  onPick: (correctGuess: boolean) => void;
}

export const ChoiceButtons: React.FC<Props> = ({ answers, onPick }) => {
  const [guessedIndex, setGuessedIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
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
                : undefined
              : undefined
          }
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
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
