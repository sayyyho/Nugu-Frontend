import * as S from "./styled";

import { useRecoilValue } from "recoil";
import { signUpState } from "@atoms/signUpState";

import { SIGN_UP_FIELDS } from "@constants/signUp";
import { Layout } from "@components/common/layout/Layout";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { Input } from "@components/input/Input";
import { Button } from "@components/common/button/button";

import { usePageInfo } from "@hooks/usePageInfo";
import { useValidation } from "./_hooks/useValidation";
import { useSignUp } from "./_hooks/useSignUp";

export const SignUp = () => {
  const { page, nextPath } = usePageInfo();
  const signUpData = useRecoilValue(signUpState);

  const { allFilled, validateField, resetValidation } = useValidation(page);
  const { handleInputChange, handleNextClick } = useSignUp(page);

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
                handleInputChange(
                  data.name,
                  e.target.value,
                  index,
                  data.name,
                  validateField
                )
              }
              type={data.type}
            />
          ))}
        </S.TopWrapper>

        <Button
          disabled={!allFilled}
          onClick={() => handleNextClick(resetValidation, nextPath)}
        >
          다음
        </Button>
      </S.SignUpWrapper>
    </Layout>
  );
};
