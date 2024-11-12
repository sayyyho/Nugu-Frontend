import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TEST_QUESTION } from "@constants/nuguTest";
import { useRecoilState } from "recoil";
import { isMakeTestOwner } from "@atoms/nuguTestState";

export const useMakeNuguTest = () => {
  const navigate = useNavigate();
  const [isMakeTest, setIsMakeTest] = useRecoilState(isMakeTestOwner);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(
    Array(TEST_QUESTION.length).fill(null)
  );
  //TEST_QUESTION 길이와 같은 배열 만들기 위함입니다.
  const [answerHistory, setAnswerHistory] = useState([]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = answer;
      return updatedAnswers;
    });
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
      setIsMakeTest(true);
    }
  };

  useEffect(() => {
    if (answerHistory.length === TEST_QUESTION.length) {
      console.log("소유자가 선택한 답들 in useMakeTest.js: ", answerHistory);
    }
  }, [answerHistory]);

  useEffect(() => {
    if (isMakeTest) {
      navigate("/test");
    }
  }, [isMakeTest, navigate]);

  return {
    currentQuestion,
    selectedAnswer,
    handleAnswerSelect,
    handleNextQuestion,
  };
};
