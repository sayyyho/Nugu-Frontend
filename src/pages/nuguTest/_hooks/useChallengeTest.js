import { useState } from "react";
import { TEST_QUESTION } from "@constants/nuguTest";

export const useChallengeTest = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(
    Array(TEST_QUESTION.length).fill(null)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerHistory, setAnswerHistory] = useState([]);
  const [isChallenge, setIsChallenge] = useState(false);
  const [isCheckTotalRanking, setIsCheckTotalRanking] = useState(false);

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...selectedAnswer];
    updatedAnswers[currentQuestion] = answer;
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
      setAnswerHistory((prevHistory) => [
        ...prevHistory,
        selectedAnswer[currentQuestion],
      ]);
      console.log("접속자가 선택한 답: ", answerHistory);

      setIsChallenge(true);
    }
  };

  const handleIsClickChange = (value) => {
    setIsCheckTotalRanking(value);
  };

  return {
    selectedAnswer,
    currentQuestion,
    isChallenge,
    isCheckTotalRanking,
    handleAnswerSelect,
    handleNextQuestion,
    handleIsClickChange,
  };
};
