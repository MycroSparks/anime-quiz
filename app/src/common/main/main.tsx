import React from "react";
import { View } from "react-native";
import { Questions } from "../questions";

export const Main: React.FC = () => {
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
    <View style={{ flex: 1, backgroundColor: "#aff" }}>
      <Questions questions={questions}></Questions>
    </View>
  );
};
