import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { Headline } from "react-native-paper";
import { useAppContext } from "../core/app-context/app-context.hook";
import { Question } from "../core/global/question/question.constant";
import { ChoiceButtons } from "./choice-buttons";

interface Props {
  questions: Question[];
  questionTimer?: number;
  onFinish?: () => void;
}

export const Questions: React.FC<Props> = ({
  questions,
  onFinish,
  questionTimer,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timer, setTimer] = useState(questionTimer);

  const nextQuestion = useCallback(() => {
    setTimeout(() => {
      setTimer(questionTimer);
      if (questions.length > currentQuestionIndex + 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        return;
      }
      if (onFinish) {
        console.log("wtf");
        onFinish();
      }
    }, 1000);
  }, [currentQuestionIndex, onFinish]);

  const interval = useMemo(() => {
    if (questionTimer === undefined) {
      return null;
    }
    if (interval) {
      clearInterval(interval);
    }
    return setInterval(() => {
      let newTimer: number | undefined = undefined;
      setTimer((x) => {
        newTimer = !!x ? x-- : x;
        return !!x ? x-- : x;
      });
      console.log(newTimer);
      if (newTimer !== undefined && newTimer <= 0) {
        console.log("gogoequestions");
        nextQuestion();
      }
    }, 1000);
  }, [nextQuestion]);

  useEffect(() => {
    if (questionTimer === undefined && interval) {
      clearInterval(interval);
    }
  }, [questionTimer, interval]);

  const { correctGuesses, setCorrectGuesses, points, setPoints } =
    useAppContext();

  const currentQuestion = useMemo(
    () => questions[currentQuestionIndex],
    [currentQuestionIndex, questions]
  );

  return (
    <View
      key={currentQuestion.question}
      style={{
        flex: 1,
        alignItems: "center",
        display: "flex",
      }}
    >
      <View style={{ flex: 2, marginHorizontal: 20 }}>
        <Headline style={{ textAlign: "center", fontWeight: "bold" }}>
          {currentQuestion.question}
        </Headline>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <ChoiceButtons
          answers={currentQuestion.option}
          onPick={(correctGuess) => {
            if (correctGuess) {
              setCorrectGuesses(correctGuesses + 1);
              setPoints(points + 1);
            }
            nextQuestion();
          }}
        />
      </View>
    </View>
  );
};
