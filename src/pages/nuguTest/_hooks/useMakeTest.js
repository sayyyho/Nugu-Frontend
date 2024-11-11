import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TEST_QUESTION } from "@constants/nuguTest";
import { useRecoilState } from "recoil";
import { isMakeTestOwner } from "@atoms/nuguTestState";

export const useMakeNuguTest = () => {
  const navigate = useNavigate();
  const [isMakeTest, setIsMakeTest] = useRecoilState(isMakeTestOwner);

  // 상태 관리
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

  return {
    currentQuestion,
    selectedAnswer,
    handleAnswerSelect,
    handleNextQuestion,
  };
};
