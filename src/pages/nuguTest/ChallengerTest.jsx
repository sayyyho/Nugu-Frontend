//접속자뷰- 누구테스트진행 및 결과 확인

import * as S from "./styled";
import { useState } from "react";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { BottomBtn } from "@components/common/button/BottomBtn";
import { TEST_QUESTION } from "@constants/nuguTest";
import { CompleteTest } from "@components/nuguTest/CompleteTest";
import { TestRanking } from "@components/nuguTest/TestRanking";
export const ChallengerTest = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerHistory, setAnswerHistory] = useState([]);
  const [isChallenge, setIschallenge] = useState(false);
  const [isCheckTotalRanking, setIsCheckTotalRanking] = useState(false);

  const handleIsClickChange = (value) => {
    setIsCheckTotalRanking(value);
  };
  const array = [
    {
      nickname: "응시자1",
      correctAnswers: 7,
      rank: 2,
      totalParticipants: 3,
    },
    {
      nickname: "응시자2",
      correctAnswers: 7,
      rank: 2,
      totalParticipants: 3,
    },
    {
      nickname: "응시자3",
      correctAnswers: 7,
      rank: 2,
      totalParticipants: 3,
    },
  ];

  const rank = [0, 1, 1, 1, 0, 0, 1, 0, 1, 1];
  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...selectedAnswer];
    updatedAnswers[currentQuestion] = answer; // 현재 질문의 선택한 답을 업데이트
    setSelectedAnswer(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < TEST_QUESTION.length - 1) {
      setAnswerHistory((prevHistory) => [
        ...prevHistory,
        selectedAnswer[currentQuestion],
      ]);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("선택된 답들: ", answerHistory);
      setAnswerHistory((prevHistory) => [
        ...prevHistory,
        selectedAnswer[currentQuestion],
      ]);
      setIschallenge(true);
    }
  };

  return (
    <>
      <ProgressBar
        title={"누구테스트"}
        $now={currentQuestion + 1}
        $total={10}
      />
      <S.Container>
        {isChallenge ? (
          isCheckTotalRanking ? (
            <TestRanking
              username={"하채민"}
              correctAnswers={array[0].correctAnswers}
              rank={array[0].rank}
              ranking={array}
              highlightIndex={0}
            />
          ) : (
            <CompleteTest ranking={array} onClickChange={handleIsClickChange} />
          )
        ) : (
          <>
            <S.TestQuestionWrapper>
              <div>{TEST_QUESTION[currentQuestion].Num}/10</div>
              <div>{TEST_QUESTION[currentQuestion].Question}</div>
            </S.TestQuestionWrapper>
            <S.AnswerContainer>
              {TEST_QUESTION[currentQuestion].Ans.map((answer, index) => {
                const isAnswerinCorrect =
                  rank[currentQuestion] !== selectedAnswer[currentQuestion]; // 정답 여부 체크
                return (
                  <S.AnswerBox
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    $isSelected={selectedAnswer[currentQuestion] === index}
                    $isAnswer={!isAnswerinCorrect}
                  >
                    {answer}
                  </S.AnswerBox>
                );
              })}
            </S.AnswerContainer>
            <BottomBtn
              disabled={selectedAnswer[currentQuestion] === null}
              onClick={handleNextQuestion}
            >
              {TEST_QUESTION[currentQuestion].Num === 10
                ? "완료하기"
                : "다음으로"}
            </BottomBtn>
          </>
        )}
      </S.Container>
    </>
  );
};
