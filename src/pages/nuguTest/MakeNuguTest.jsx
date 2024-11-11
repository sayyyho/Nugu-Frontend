import * as S from "./styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { TEST_QUESTION } from "@constants/nuguTest";
import { BottomBtn } from "@components/common/button/styled";
import { isMakeTestOwner } from "@atoms/nuguTestState";
import { useRecoilState } from "recoil";
export const MakeNuguTest = () => {
  const navigate = useNavigate();
  const [isMakeTest, setIsMakeTest] = useRecoilState(isMakeTestOwner);

  //훅 정리 필요
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerHistory, setAnswerHistory] = useState([]);
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < TEST_QUESTION.length - 1) {
      setAnswerHistory((prevHistory) => [...prevHistory, selectedAnswer]);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      console.log("선택된 답들: ", answerHistory);
      setIsMakeTest(true);
    }
  };

  useEffect(() => {
    console.log("isMakeTest: ", isMakeTest); // 상태 변경 확인
    if (isMakeTest) {
      navigate("/test");
    }
  }, [isMakeTest, navigate]);
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
              isSelected={selectedAnswer === index} // 선택된 항목 0,1로 배열 전달
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
