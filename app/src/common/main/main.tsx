import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import { Headline } from "react-native-paper";
import { useAppContext } from "../../core/app-context/app-context.hook";
import { EndScreen } from "../end-screen/end-screen.component";
import { Questions } from "../questions";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StartScreen } from "../start-screen/start-screen.component";

export const Main: React.FC = () => {
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  const { points, setCorrectGuesses } = useAppContext();

  return (
    <ImageBackground
      source={require("../../assets/hisoka__hunter_x_hunter__minimalist_wallpaper_by_greenmapple17-d8imij3.png")}
      style={{ flex: 1, backgroundColor: "#aff" }}
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
          questions={questions}
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
          totalQuestions={questions.length}
        />
      )}
    </ImageBackground>
  );
};

const questions = [
  {
    text: 'Who is the main protagonist of the anime "Naruto"?',
    answers: ["Luffy", "Natsu Dragneel", "Eren Yeager", "Naruto"],
    correctAnswerIndex: 3,
  },
  {
    text: "Where does animate originate from?",
    answers: ["Japan", "China", "Pakistan", "The Moon"],
    correctAnswerIndex: 2,
  },
  {
    text: "Which of these pokemon is a fire type?",
    answers: ["Lickitung", "Muk", "Rapidash", "Paras"],
    correctAnswerIndex: 2,
  },
  {
    text: `Who is the creator of the "Jojo's Bizzare Adventure" manga?`,
    answers: [
      "Masashi Kishimoto",
      "Hirohiko Araki",
      "Hajime Isayama",
      "Yoshihiro Togashi",
    ],
    correctAnswerIndex: 1,
  },
  {
    text: "Which of these anime came out first?",
    answers: [
      "Hajime no Ippo",
      "Yu Yu Hakusho",
      "Digimon Adventure",
      "Dragon ball",
    ],
    correctAnswerIndex: 3,
  },
];
