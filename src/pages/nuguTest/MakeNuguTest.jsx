//소유자뷰- 누구테스트 생성
import * as S from "./styled";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { TEST_QUESTION } from "@constants/nuguTest";
import { TestQuestion } from "@components/testQuestion/TestQuestion";
import { useMakeNuguTest } from "./_hooks/useMakeTest";
export const MakeNuguTest = () => {
  const {
    currentQuestion,
    selectedAnswer,
    handleAnswerSelect,
    handleNextQuestion,
  } = useMakeNuguTest();

  const isAnswerSelected = selectedAnswer[currentQuestion] !== null;
  return (
    <>
      <ProgressBar
        title={"누구테스트 만들기"}
        $now={currentQuestion + 1}
        $total={10}
      />
      <TestQuestion
        currentQuestion={currentQuestion}
        selectedAnswer={selectedAnswer}
        handleAnswerSelect={handleAnswerSelect}
        handleNextQuestion={handleNextQuestion}
        TEST_QUESTION={TEST_QUESTION}
        isAnswerinCorrect={true}
        isAnswerSelected={isAnswerSelected}
      />
    </>
  );
};
