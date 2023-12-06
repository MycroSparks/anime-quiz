import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { RootStackParamList } from "../navigation/navigator.component";

enum QuizMode {
  Standard = "Standard",
  Timed = "Timed",
}

export const GameModeMenu: React.FC<
  NativeStackScreenProps<RootStackParamList, "GameModeMenu">
> = ({ navigation }) => {
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <View
        style={{
          display: "flex",
          flex: 10,
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {Object.values(QuizMode).map((quizMode) => (
          <View key={quizMode} style={{ flex: 1, margin: 20 }}>
            <Button
              mode="contained"
              onPress={() => {
                switch (quizMode) {
                  case QuizMode.Standard:
                    navigation.navigate("StandardQuiz", { totalQuestions: 5 });
                    break;
                  case QuizMode.Timed:
                    navigation.navigate("TimedQuiz", { totalQuestions: 5 });
                    break;
                }
              }}
            >
              {quizMode}
            </Button>
          </View>
        ))}
      </View>
      <View style={{ flex: 1, margin: 20 }}>
        <Button
          mode="contained"
          onPress={() => {
            navigation.pop();
          }}
        >
          Back
        </Button>
      </View>
    </View>
  );
};
