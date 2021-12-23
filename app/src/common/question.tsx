import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { Headline } from "react-native-paper";
import { ChoiceButtons } from "./choice-buttons";

interface Props {
  questions: { text: string; answers: string[]; correctAnswerIndex: number }[];
}

export const Question: React.FC<Props> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const question = useMemo(
    () => questions[currentQuestionIndex],
    [currentQuestionIndex, questions]
  );

  return (
    <View
      key={question.text}
      style={{
        flex: 1,
        alignItems: "center",
        display: "flex",
        paddingVertical: 30,
      }}
    >
      <View style={{ flex: 2, marginBottom: 20, justifyContent: "center" }}>
        <Headline style={{ textAlign: "center" }}>{question.text}</Headline>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ChoiceButtons
          answers={question.answers}
          onPick={(correctGuess) => {}}
          correctAnswerIndex={question.correctAnswerIndex}
        ></ChoiceButtons>
      </View>
    </View>
  );
};
