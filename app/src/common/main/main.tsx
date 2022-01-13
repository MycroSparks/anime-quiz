import React, { useEffect, useMemo, useState } from "react";
import { ImageBackground, View } from "react-native";
import { Headline } from "react-native-paper";
import { useAppContext } from "../../core/app-context/app-context.hook";
import { EndScreen } from "../end-screen/end-screen.component";
import { Questions } from "../questions";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StartScreen } from "../start-screen/start-screen.component";
import { shuffle } from "../../core/global/question/question.util";
import {
  Question,
  questions,
} from "../../core/global/question/question.constant";
import { QuestionAmountSelector } from "../questionAmountSelector";

enum QuizPhase {
  MainMenu = "MainMenu",
  QuestionAmountPick = "QuestionAmountPick",
  Finished = "Finished",
  Started = "Started",
}

export const Main: React.FC = () => {
  const [quizPhase, setQuizPhase] = useState<QuizPhase>(QuizPhase.MainMenu);
  const [questionAmount, setQuestionAmount] = useState<number>(0);
  const [backgroundIndex, setBackgroundIndex] = useState(
    Math.floor(Math.random() * backgrounds.length)
  );

  const [actualQuestionAmount, setActualQuestionAmount] = useState<number>(0);

  const { points, setCorrectGuesses, updateTheme } = useAppContext();

  const quizQuestions: Question[] = useMemo(() => {
    if (quizPhase === QuizPhase.Started) {
      const shuffledQuestions = shuffle(questions)
        .slice(0, questionAmount)
        .map((question) => ({
          ...question,
          answers: shuffle(question.answers),
        }));
      setActualQuestionAmount(shuffledQuestions.length);
      return shuffledQuestions;
    }
    return [];
  }, [questions, quizPhase]);

  useEffect(() => {
    const selectedBackground = backgrounds[backgroundIndex];
    const updatedTheme = {
      colors: {
        primary: selectedBackground.darkPrimary ? "#000000" : "#ffffff",
        text: backgrounds[backgroundIndex].darkText ? "#000000" : "#ffffff",
      },
    };
    updateTheme(updatedTheme);
  }, [backgroundIndex]);

  useEffect(() => {
    if (quizPhase === QuizPhase.MainMenu) {
      setBackgroundIndex(Math.floor(Math.random() * backgrounds.length));
    }
  }, [quizPhase]);

  return (
    <ImageBackground
      source={backgrounds[backgroundIndex].path}
      style={{
        flex: 1,
        backgroundColor: "#aff",
        paddingBottom: 40,
        paddingTop: 80,
      }}
      resizeMode="stretch"
    >
      <View
        style={{
          position: "absolute",
          right: 8,
          top: 30,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Headline
          style={{ color: "white", marginRight: 2, fontWeight: "bold" }}
        >
          {points}
        </Headline>
        <MaterialIcons size={32} color={"orange"} name="star"></MaterialIcons>
      </View>
      {quizPhase === QuizPhase.MainMenu ? (
        <StartScreen
          onStart={() => {
            setQuizPhase(QuizPhase.QuestionAmountPick);
          }}
        ></StartScreen>
      ) : quizPhase === QuizPhase.QuestionAmountPick ? (
        <QuestionAmountSelector
          onSelect={(amount) => {
            setQuestionAmount(amount);
            setQuizPhase(QuizPhase.Started);
          }}
          options={[5, 10, 15, 20, 25]}
        />
      ) : quizPhase === QuizPhase.Started ? (
        <Questions
          questions={quizQuestions}
          onFinish={() => {
            setQuizPhase(QuizPhase.Finished);
          }}
        />
      ) : (
        <EndScreen
          onConfirm={() => {
            setQuizPhase(QuizPhase.MainMenu);
            setCorrectGuesses(0);
          }}
          totalQuestions={actualQuestionAmount}
        />
      )}
    </ImageBackground>
  );
};

export interface CustomBackgroundImage {
  path: any;
  darkText?: boolean;
  darkPrimary?: boolean;
}

const backgrounds: CustomBackgroundImage[] = [
  {
    path: require("../../assets/hisoka__hunter_x_hunter__minimalist_wallpaper_by_greenmapple17-d8imij3.png"),
    darkPrimary: true,
  },
  { path: require("../../assets/tokyo_ghoul.png") },
];
