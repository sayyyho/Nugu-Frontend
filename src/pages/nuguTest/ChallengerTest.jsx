//접속자뷰- 누구테스트진행 및 결과 확인

import * as S from "./styled";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { TestQuestion } from "@components/testQuestion/TestQuestion";
import { TEST_QUESTION } from "@constants/nuguTest";
import { CompleteTest } from "@components/nuguTest/CompleteTest";
import { TestRanking } from "@components/nuguTest/TestRanking";
import { useChallengeTest } from "./_hooks/useChallengeTest";
export const ChallengerTest = () => {
  const {
    selectedAnswer,
    currentQuestion,
    isChallenge,
    isCheckTotalRanking,
    handleAnswerSelect,
    handleNextQuestion,
    handleIsClickChange,
  } = useChallengeTest();

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

  const rank = [0, 1, 1, 1, 0, 0, 1, 0, 1, 1]; // 서버에서 받아올 값
  const isAnswerinCorrect =
    rank[currentQuestion] !== selectedAnswer[currentQuestion];
  const isAnswerSelected = selectedAnswer[currentQuestion] !== null; // 답 선택 여부
  return (
    <>
      <ProgressBar
        title={"누구테스트"}
        $now={currentQuestion + 1}
        $total={10}
      />
      <S.ChallengeContainer>
        {isChallenge ? ( //3명 랭킹 보여주는 화면
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
          <TestQuestion
            currentQuestion={currentQuestion}
            selectedAnswer={selectedAnswer}
            handleAnswerSelect={handleAnswerSelect}
            handleNextQuestion={handleNextQuestion}
            TEST_QUESTION={TEST_QUESTION}
            isAnswerinCorrect={isAnswerinCorrect}
            isAnswerSelected={isAnswerSelected}
          />
        )}
      </S.ChallengeContainer>
    </>
  );
};
