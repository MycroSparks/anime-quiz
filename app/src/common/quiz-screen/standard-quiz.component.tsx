import { Questions } from "../questions";
import { RootStackParamList } from "../navigation/navigator.component";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuestions } from "../../core/global/hooks/questions.hook";

export const StandardQuiz: React.FC<
  NativeStackScreenProps<RootStackParamList, "StandardQuiz">
> = ({ route, navigation }) => {
  const { totalQuestions } = route.params;

  const quizQuestions = useQuestions(totalQuestions);

  return (
    <Questions
      questions={quizQuestions}
      onFinish={() =>
        navigation.navigate("EndScreen", { totalQuestions: totalQuestions })
      }
    />
  );
};
