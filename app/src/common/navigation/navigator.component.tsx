import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainMenu } from "../main-menu/main-menu.component";
import { StandardQuiz } from "../quiz-screen/standard-quiz.component";
import { EndScreen } from "../end-screen/end-screen.component";
import { ImageBackground } from "react-native";
import { useAppContext } from "../../core/app-context/app-context.hook";
import { Header } from "../header/header.component";
import { backgrounds } from "../../core/app-context/app-context.provider";
import { GameModeMenu } from "../main-menu/game-mode-menu.component";
import { TimedQuiz } from "../quiz-screen/timed-quiz.component";

export type RootStackParamList = {
  StandardQuiz: {
    totalQuestions: number;
  };
  TimedQuiz: { totalQuestions: number };
  MainMenu: {};
  GameModeMenu: {};
  EndScreen: {
    totalQuestions: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator: React.FC = () => {
  const { backgroundIndex } = useAppContext();

  return (
    <ImageBackground
      source={backgrounds[backgroundIndex].path}
      style={{
        flex: 1,
        backgroundColor: "#aff",
      }}
      resizeMode="stretch"
    >
      <Header />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { paddingTop: 40, paddingBottom: 40 },
        }}
        initialRouteName="MainMenu"
      >
        <Stack.Screen name={"MainMenu"} component={MainMenu} />
        <Stack.Screen name={"GameModeMenu"} component={GameModeMenu} />
        <Stack.Screen name={"StandardQuiz"} component={StandardQuiz} />
        <Stack.Screen name={"TimedQuiz"} component={TimedQuiz} />
        <Stack.Screen name={"EndScreen"} component={EndScreen} />
      </Stack.Navigator>
    </ImageBackground>
  );
};
