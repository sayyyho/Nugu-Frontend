import { useRecoilState, useRecoilValue } from "recoil";

import { useNavigate } from "react-router-dom";

import { signUpState } from "@atoms/signUpState";

export const useSignUp = (page) => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const handleInputChange = (field, value, index, fieldName, validateField) => {
    validateField(index, value, fieldName);

    setSignUpData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleNextClick = (resetValidation, nextPath) => {
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
  return { handleInputChange, handleNextClick, handleSubmit };
};
