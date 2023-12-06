import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigator.component";
import { useQuestions } from "../../core/global/hooks/questions.hook";
import { Questions } from "../questions";

export const TimedQuiz: React.FC<
  NativeStackScreenProps<RootStackParamList, "TimedQuiz">
> = ({ route, navigation }) => {
  const { totalQuestions } = route.params;

  const quizQuestions = useQuestions(totalQuestions);

  return (
    <Questions
      questions={quizQuestions}
      questionTimer={5}
      onFinish={() =>
        navigation.navigate("EndScreen", { totalQuestions: totalQuestions })
      }
    />
  );
};
