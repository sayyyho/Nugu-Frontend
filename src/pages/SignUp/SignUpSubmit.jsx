import * as S from "./styled";

import { Layout } from "@components/common/layout/Layout";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { Chip } from "@components/chip/Chip";
import { Button } from "@components/common/button/Button";

import { useRecoilState } from "recoil";
import { signUpState } from "@atoms/signUpState";

import { CHIP_DATA } from "@constants/chip";

export const SignUpSubmit = () => {
  return (
    <Layout $backgroundColor={"gray200"}>
      <S.SignUpWrapper>
        <S.TopWrapper>
          <ProgressBar title={"누구 생성하기"} $now={4} />
          <S.TitleWrapper>
            <S.Title>나를 표현하는 키워드</S.Title>
            <S.SubTitle>나와 어울리는 키워드 3개를 선택해주세요</S.SubTitle>
            <S.ChipWrapper>
              {CHIP_DATA.map((text, index) => (
                <Chip $backgroundColor={"white"} key={index}>
                  {text}
                </Chip>
              ))}
            </S.ChipWrapper>
          </S.TitleWrapper>
        </S.TopWrapper>
        <Button disabled={false} onClick={() => console.log("")}>
          누구 생성하기
        </Button>
      </S.SignUpWrapper>
    </Layout>
  );
};
