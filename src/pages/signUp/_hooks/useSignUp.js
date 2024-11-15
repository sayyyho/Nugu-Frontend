import { useRecoilState, useRecoilValue } from "recoil";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpState } from "@atoms/signUpState";

export const useSignUp = (page) => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [errors, setErrors] = useState({});

  const checkFieldValidity = (value, fieldName) => {
    let error = "";
    // 각 필드에 대한 유효성 검사
    if (fieldName === "username" && (value.length === 0 || value.length > 20)) {
      error = "아이디는 20자 이내로 작성해주세요.";
    } else if (
      fieldName === "password" &&
      (value.length < 8 || value.length > 16)
    ) {
      error = "비밀번호는 8-16자로 작성해주세요.";
    } else if (fieldName === "nickname" && value.length > 5) {
      error = "닉네임은 5자 이내로 작성해주세요.";
    } else if (fieldName === "mbti") {
      value = value.trim(); // 공백 제거
      // 영문 4자 검사
      if (value && !/^[A-Za-z]{4}$/.test(value)) {
        error = "MBTI는 영문 4자로 입력해주세요."; // 오류 메시지
      }
    } else if (fieldName === "organization" && value.length > 30) {
      error = "소속은 30자 이내로 작성해주세요.";
    } else if (fieldName === "intro" && value.length > 30) {
      error = "한 줄 소개는 30자 이내로 작성해주세요.";
    }

    return error;
  };

  const handleInputChange = (field, value, index, fieldName, validateField) => {
    validateField(index, value, fieldName);

    setSignUpData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleNextClick = (resetValidation, nextPath) => {
    let valid = true;
    const tempErrors = {}; // 오류를 임시로 저장할 객체

    // 각 필드에 대해 유효성 검사
    Object.keys(signUpData).forEach((field) => {
      const value = signUpData[field];
      const error = checkFieldValidity(value, field);
      console.log(`Error for ${field}: ${error}`);

      if (error !== "") {
        valid = false;
        tempErrors[field] = error;
      } else {
        delete tempErrors[field];
      }
    });
    setErrors(tempErrors);
    console.log(valid);
    if (!valid) {
      return;
    }

    if (Number(page) === 3) {
      setSignUpData((prevData) => ({
        ...prevData,
        insta_url: `https://instagram.com/${signUpData.insta_url}`,
      }));
      navigate("/signUp/submit");
    } else {
      navigate(nextPath);
    }

    resetValidation(Number(page));
  };

  const handleSubmit = () => {
    console.log(signUpData);
    navigate("/signUp/create");
  };

  return { handleInputChange, handleNextClick, handleSubmit, errors };
};
