import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import { EndScreen } from "../end-screen/end-screen.component";
import { Questions } from "../questions";

export const Main: React.FC = () => {
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  return (
    <ImageBackground
      source={require("../../assets/hisoka__hunter_x_hunter__minimalist_wallpaper_by_greenmapple17-d8imij3.png")}
      style={{ flex: 1, backgroundColor: "#aff" }}
      resizeMode="stretch"
    >
      {!quizFinished ? (
        <Questions
          questions={questions}
          onFinish={() => {
            setQuizFinished(true);
          }}
        />
      ) : (
        <EndScreen onRestart={() => setQuizFinished(false)} />
      )}
    </ImageBackground>
  );
};

const questions = [
  {
    text: 'Who is the main protagonist of the anime "Naruto"?',
    answers: ["Luffy", "Natsu Dragneel", "Naruto", "Eren Yeager"],
    correctAnswerIndex: 2,
  },
  {
    text: "Where does animate originate from?",
    answers: ["Japan", "China", "Pakistan", "The Moon"],
    correctAnswerIndex: 0,
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
