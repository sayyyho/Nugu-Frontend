//접속자뷰- 누구테스트진행 및 결과 확인

import * as S from "./styled";
import { useState, useEffect } from "react";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { TestQuestion } from "@components/testQuestion/TestQuestion";
import { TEST_QUESTION } from "@constants/nuguTest";
import { CompleteTest } from "@components/nuguTest/CompleteTest";
import { TestRanking } from "@components/nuguTest/TestRanking";
import { useChallengeTest } from "./_hooks/useChallengeTest";
import { getUserTestAnswer } from "@apis/nuguTest";
import Cookies from "js-cookie";

export const ChallengerTest = () => {
  const [rank, setRank] = useState(null);
  const {
    challengerId,
    result,
    selectedAnswer,
    currentQuestion,
    isChallenge,
    isCheckTotalRanking,
    handleAnswerSelect,
    handleNextQuestion,
    handleIsClickChange,
  } = useChallengeTest();

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const reponse = await getUserTestAnswer();
        setRank(reponse);
      } catch (error) {
        console.error("getUserTestAnswer 못받아옴:", error);
      }
    };

    fetchRank();
  }, []);
  const userInfo = rank?.find((user) => user.id === challengerId);
  const ResulthighlightIndex = rank?.findIndex(
    (user) => user.id === challengerId
  );
  const isAnswerinCorrect = rank
    ? rank[currentQuestion] !== selectedAnswer[currentQuestion]
    : false;
  const isAnswerSelected = selectedAnswer[currentQuestion] !== null;
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
              username={Cookies.get("nickname")}
              correctAnswers={userInfo?.correctAnswers}
              rank={userInfo?.rank}
              ranking={result}
              highlightIndex={ResulthighlightIndex}
            />
          ) : (
            <CompleteTest
              ranking={result}
              onClickChange={handleIsClickChange}
            />
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
