import { useMemo } from "react";
import { shuffle } from "../question/question.util";
import qs from "../question/questions.json";

export function useQuestions(totalQuestions?: number) {
  const quizQuestions = useMemo(() => {
    return shuffle(
      qs.questions.map((question) => ({
        ...question,
        option: shuffle(question.option),
      }))
    ).slice(0, totalQuestions);
  }, [qs]);

  return quizQuestions;
}
