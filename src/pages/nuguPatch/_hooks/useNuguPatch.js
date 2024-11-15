import { patchNuguInfo } from "@apis/nuguPatch";
import { useRecoilState } from "recoil";
import { signUpState } from "@atoms/signUpState";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const useNuguPatch = () => {
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const [updateData, setUpdateData] = useRecoilState(signUpState);
  const handleSubmit = async () => {
    console.log(updateData);

    let valid = true;
    const tempErrors = {};

    Object.keys(updateData).forEach((field) => {
      const value = updateData[field];
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

    try {
      const response = await patchNuguInfo({
        nickname: updateData.nickname,
        mbti: updateData.mbti,
        org: updateData.org,
        insta_url: updateData.insta_url,
        intro: updateData.intro,
        keyword1: updateData.keyword1,
        keyword2: updateData.keyword2,
        keyword3: updateData.keyword3,
      });
    } catch (err) {
      throw err;
    }
  };
  const checkFieldValidity = (value, fieldName) => {
    let error = "";
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
      value = value.trim();
      if (value && !/^[A-Za-z]{4}$/.test(value)) {
        error = "MBTI는 영문 4자로 입력해주세요.";
      }
    } else if (fieldName === "organization" && value.length > 30) {
      error = "소속은 30자 이내로 작성해주세요.";
    } else if (fieldName === "intro" && value.length > 30) {
      error = "한 줄 소개는 30자 이내로 작성해주세요.";
    }

    return error;
  };

  const isFormValid = () => {
    const requiredFields = [
      updateData.nickname,
      updateData.mbti,
      updateData.org,
      updateData.insta_url,
      updateData.intro,
      updateData.keyword1,
      updateData.keyword2,
      updateData.keyword3,
    ];
    return requiredFields.every((field) => field !== "");
  };
  return { handleSubmit, isFormValid, errors };
};
