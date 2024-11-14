import { useState } from "react";
import { TEST_QUESTION } from "@constants/nuguTest";
import { getNuguTestResult } from "@apis/nuguTest";
import Cookies from "js-cookie";

export const useChallengeTest = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(
    Array(TEST_QUESTION.length).fill(null)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerHistory, setAnswerHistory] = useState([]);
  const [isChallenge, setIsChallenge] = useState(false);
  const [isCheckTotalRanking, setIsCheckTotalRanking] = useState(false);
  const [result, setResult] = useState([]);

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...selectedAnswer];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswer(updatedAnswers);
  };

  const handleNextQuestion = async () => {
    if (currentQuestion < TEST_QUESTION.length - 1) {
      setAnswerHistory((prevHistory) => [
        ...prevHistory,
        selectedAnswer[currentQuestion],
      ]);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswerHistory((prevHistory) => [
        ...prevHistory,
        selectedAnswer[currentQuestion],
      ]);
      console.log("접속자가 선택한 답: ", answerHistory);
      const result = await getNuguTestResult(Cookies.get("uuid"));
      setResult(result);
      setIsChallenge(true);
    }
  };

  const handleIsClickChange = (value) => {
    setIsCheckTotalRanking(value);
  };

  return {
    result,
    selectedAnswer,
    currentQuestion,
    isChallenge,
    isCheckTotalRanking,
    handleAnswerSelect,
    handleNextQuestion,
    handleIsClickChange,
  };
};
