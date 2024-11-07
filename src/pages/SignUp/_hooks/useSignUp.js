import { useRecoilState, useRecoilValue } from "recoil";

import { useNavigate } from "react-router-dom";

import { signUpState } from "@atoms/signUpState";
import { chipState } from "@atoms/chipState";
import { CHIP_DATA } from "@constants/chip";

export const useSignUp = (page) => {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useRecoilState(signUpState);
  const chipArray = useRecoilValue(chipState);
  const chipResult = chipArray
    .map((data, index) => (data === true ? CHIP_DATA[index] : null))
    .filter((item) => item !== null);

  console.log(signUpData);

  const handleInputChange = (field, value, index, fieldName, validateField) => {
    validateField(index, value, fieldName);

    setSignUpData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleNextClick = (resetValidation, nextPath) => {
    if (Number(page) === 3) {
      navigate("/signUp/submit");
    } else {
      navigate(nextPath);
    }
    resetValidation(Number(page));
  };

  const handleSubmit = () => {
    setSignUpData((prevData) => ({
      ...prevData,
      keyword1: chipResult[0],
    }));
    setSignUpData((prevData) => ({
      ...prevData,
      keyword2: chipResult[1],
    }));
    setSignUpData((prevData) => ({
      ...prevData,
      keyword3: chipResult[2],
    }));
    console.log(signUpData);
    console.log("TODO: API 연결하기");
  };
  return { handleInputChange, handleNextClick, handleSubmit };
};
