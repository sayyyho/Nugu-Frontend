//소유자뷰- 누구테스트 생성
import * as S from "./styled";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { TEST_QUESTION } from "@constants/nuguTest";
import { BottomBtn } from "@components/common/button/BottomBtn";
import { useMakeNuguTest } from "./_hooks/useMakeTest";
export const MakeNuguTest = () => {
  const {
    currentQuestion,
    selectedAnswer,
    handleAnswerSelect,
    handleNextQuestion,
  } = useMakeNuguTest();
  return (
    <>
      <ProgressBar
        title={"누구테스트 만들기"}
        $now={currentQuestion + 1}
        $total={10}
      />
      <S.Container>
        <S.TestQuestionWrapper>
          <div>{TEST_QUESTION[currentQuestion].Num}/10</div>
          <div>{TEST_QUESTION[currentQuestion].Question}</div>
        </S.TestQuestionWrapper>
        <S.AnswerContainer>
          {TEST_QUESTION[currentQuestion].Ans.map((answer, index) => (
            <S.AnswerBox
              key={index}
              onClick={() => handleAnswerSelect(index)}
              $isSelected={selectedAnswer === index} // 선택된 항목 0,1로 배열 전달
            >
              {answer}
            </S.AnswerBox>
          ))}
        </S.AnswerContainer>
        <BottomBtn
          disabled={selectedAnswer === null}
          onClick={handleNextQuestion}
        >
          {TEST_QUESTION[currentQuestion].Num === 10 ? "완료하기" : "다음으로"}
        </BottomBtn>
      </S.Container>
    </>
  );
};
