import * as S from "./styled";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signUpState } from "@atoms/signUpState";

import { SIGN_UP_FIELDS } from "@constants/signUp";
import { Layout } from "@components/common/layout/Layout";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { Input } from "@components/input/Input";
import { Button } from "@components/common/button/Button";

import { usePageInfo } from "@hooks/usePageInfo";
import { useValidation } from "./_hooks/useValidation";

export const SignUp = () => {
  const { page, nextPath } = usePageInfo();
  const [signUpData, setSignUpData] = useRecoilState(signUpState);
  const navigate = useNavigate();

  const { allFilled, validateField, resetValidation } = useValidation(page);

  const handleInputChange = (field, value, index, fieldName) => {
    validateField(index, value, fieldName);

    setSignUpData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  console.log(signUpData);
  const handleNextClick = () => {
    if (Number(page) === 3) {
      navigate("/signUp/submit");
    } else {
      navigate(nextPath);
    }
    resetValidation(Number(page) + 1);
  };

  return (
    <Layout $backgroundColor={"gray200"}>
      <S.SignUpWrapper>
        <S.TopWrapper>
          <ProgressBar title={"누구 생성하기"} $now={Number(page)} />
          {SIGN_UP_FIELDS[Number(page) - 1].map((data, index) => (
            <Input
              title={data.title}
              placeholder={data.placeholder}
              key={index}
              value={signUpData[data.name] || ""}
              onChange={(e) =>
                handleInputChange(data.name, e.target.value, index, data.name)
              }
              type={data.type}
            />
          ))}
        </S.TopWrapper>

        <Button disabled={!allFilled} onClick={handleNextClick}>
          다음
        </Button>
      </S.SignUpWrapper>
    </Layout>
  );
};
