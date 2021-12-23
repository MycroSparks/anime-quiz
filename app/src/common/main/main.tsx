import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Question } from "../question";

export const Main: React.FC = () => {
  const question = {
    text: 'Who is the main protagonist of the anime "Naruto"?',
    answers: ["Luffy", "Natsu Dragneel", "Naruto", "Eren Yeager"],
    correctAnswerIndex: 2,
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#aff" }}>
      <Question questions={[question]}></Question>
    </View>
  );
};
