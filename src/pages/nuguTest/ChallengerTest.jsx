//접속자뷰- 누구테스트진행 및 결과 확인

import * as S from "./styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { TestQuestion } from "@components/testQuestion/TestQuestion";
import { TEST_QUESTION } from "@constants/nuguTest";
import { CompleteTest } from "@components/nuguTest/CompleteTest";
import { TestRanking } from "@components/nuguTest/TestRanking";
import { useChallengeTest } from "./_hooks/useChallengeTest";
import { getUserTestAnswer } from "@apis/nuguTest";
import Cookies from "js-cookie";

export const ChallengerTest = () => {
  const { uuid } = useParams();
  const [rank, setRank] = useState([]);
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
        const reponse = await getUserTestAnswer(uuid);
        setRank(reponse.data);
      } catch (error) {
        console.error("getUserTestAnswer 못받아옴:", error);
      }
    };

    fetchRank();
  }, [uuid]);

  useEffect(() => {
    console.log("누구테스트 정답", rank);
  }, [rank]);

  const userInfo = result?.find((user) => user.id === challengerId);
  console.log("userInfo", userInfo);
  const ResulthighlightIndex = result?.findIndex(
    (user) => user.id === challengerId
  );

  //정답 비교
  const isAnswerCorrect =
    Number(rank[currentQuestion]) == selectedAnswer[currentQuestion]
      ? true
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
            isAnswerCorrect={isAnswerCorrect}
            isAnswerSelected={isAnswerSelected}
            isUser={false}
          />
        )}
      </S.ChallengeContainer>
    </>
  );
};
