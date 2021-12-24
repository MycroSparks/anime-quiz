import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ImageBackground, View } from "react-native";
import { Headline } from "react-native-paper";
import { ChoiceButtons } from "./choice-buttons";

interface Props {
  questions: { text: string; answers: string[]; correctAnswerIndex: number }[];
}

export const Questions: React.FC<Props> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const currentQuestion = useMemo(
    () => questions[currentQuestionIndex],
    [currentQuestionIndex, questions]
  );

  const nextQuestion = () => {
    setTimeout(() => {
      if (questions.length > currentQuestionIndex + 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 5000);
  };

  useEffect(() => {}, []);

  return (
    <ImageBackground
      source={{
        uri: undefined,
      }}
      key={currentQuestion.text}
      style={{
        flex: 1,
        alignItems: "center",
        display: "flex",
        paddingVertical: 30,
      }}
    >
      <View style={{ flex: 2, marginBottom: 20, justifyContent: "center" }}>
        <Headline style={{ textAlign: "center" }}>
          {currentQuestion.text}
        </Headline>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ChoiceButtons
          answers={currentQuestion.answers}
          onPick={(correctGuess) => {
            nextQuestion();
          }}
          correctAnswerIndex={currentQuestion.correctAnswerIndex}
        ></ChoiceButtons>
      </View>
    </ImageBackground>
  );
};
