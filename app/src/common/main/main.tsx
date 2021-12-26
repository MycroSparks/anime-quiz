import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import { Questions } from "../questions";

export const Main: React.FC = () => {
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const questions = [
    {
      text: 'Who is the main protagonist of the anime "Naruto"?',
      answers: ["Luffy", "Natsu Dragneel", "Naruto", "Eren Yeager"],
      correctAnswerIndex: 2,
    },
    {
      text: "Where does animate originate from?",
      answers: ["Japan", "China", "Pakistan", "The Moon"],
      correctAnswerIndex: 1,
    },
  ];

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
        ></Questions>
      ) : null}
    </ImageBackground>
  );
};
