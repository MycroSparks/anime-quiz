import React, { useEffect, useMemo, useState } from "react";
import { ImageBackground, View } from "react-native";
import { Headline } from "react-native-paper";
import { useAppContext } from "../../core/app-context/app-context.hook";
import { EndScreen } from "../end-screen/end-screen.component";
import { Questions } from "../questions";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StartScreen } from "../start-screen/start-screen.component";
import { shuffle } from "../../core/global/question/question.util";
import { questions } from "../../core/global/question/question.constant";

export const Main: React.FC = () => {
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [backgroundIndex, setBackgroundIndex] = useState(
    Math.floor(Math.random() * backgrounds.length)
  );

  const totalQuestions = 5;

  const { points, setCorrectGuesses, updateTheme } = useAppContext();

  const quizQuestions = useMemo(() => {
    return shuffle(
      questions.slice(0, totalQuestions).map((question) => ({
        ...question,
        answers: shuffle(question.answers),
      }))
    );
  }, [questions, quizFinished]);

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
    if (!quizFinished) {
      setBackgroundIndex(Math.floor(Math.random() * backgrounds.length));
    }
  }, [quizFinished]);

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
      {!quizStarted ? (
        <StartScreen
          onStart={() => {
            setQuizStarted(true);
          }}
        ></StartScreen>
      ) : !quizFinished ? (
        <Questions
          questions={quizQuestions}
          onFinish={() => {
            setQuizFinished(true);
          }}
        />
      ) : (
        <EndScreen
          onConfirm={() => {
            setQuizFinished(false);
            setQuizStarted(false);
            setCorrectGuesses(0);
          }}
          totalQuestions={totalQuestions}
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
