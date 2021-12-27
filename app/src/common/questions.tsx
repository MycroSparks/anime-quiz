import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { Headline } from "react-native-paper";
import { useAppContext } from "../core/app-context/app-context.hook";
import { ChoiceButtons } from "./choice-buttons";

interface Props {
  questions: {
    text: string;
    answers: string[];
    correctAnswerIndex: number;
  }[];
  onFinish?: () => void;
}

export const Questions: React.FC<Props> = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const { correctGuesses, setCorrectGuesses, points, setPoints } =
    useAppContext();

  const currentQuestion = useMemo(
    () => questions[currentQuestionIndex],
    [currentQuestionIndex, questions]
  );

  const nextQuestion = () => {
    setTimeout(() => {
      if (questions.length > currentQuestionIndex + 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        return;
      }
      if (onFinish) {
        onFinish();
      }
    }, 1000);
  };

  useEffect(() => {}, []);

  return (
    <View
      key={currentQuestion.text}
      style={{
        flex: 1,
        alignItems: "center",
        display: "flex",
        paddingBottom: 30,
      }}
    >
      <View style={{ flex: 2, marginTop: 80 }}>
        <Headline
          style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
        >
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
            if (correctGuess) {
              setCorrectGuesses(correctGuesses + 1);
              setPoints(points + 1);
            }
            nextQuestion();
          }}
          correctAnswerIndex={currentQuestion.correctAnswerIndex}
        ></ChoiceButtons>
      </View>
    </View>
  );
};
