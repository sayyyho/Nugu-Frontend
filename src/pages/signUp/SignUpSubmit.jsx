import * as S from "./styled";
import { theme } from "@styles/theme";

import { Layout } from "@components/common/layout/Layout";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { Chip } from "@components/chip/Chip";
import { Button } from "@components/common/button/Button";

import { CHIP_DATA } from "@constants/chip";
import { useSignUp } from "./_hooks/useSignUp";
import { useChip } from "./_hooks/useChip";

export const SignUpSubmit = () => {
  const { selectedChip, handleClickStatus, selectedCount } = useChip();
  const { handleSubmit } = useSignUp();
  return (
    <Layout $backgroundColor={"gray200"}>
      <S.SignUpWrapper>
        <S.TopWrapper>
          <ProgressBar title={"누구 생성하기"} $now={4} $total={4} />
          <S.TitleWrapper>
            <S.Title>나를 표현하는 키워드</S.Title>
            <S.SubTitle>나와 어울리는 키워드 3개를 선택해주세요</S.SubTitle>
            <S.ChipWrapper>
              {CHIP_DATA.map((text, index) => (
                <Chip
                  key={index}
                  $index={index}
                  onClick={() => handleClickStatus(index)}
                  $backgroundColor={
                    selectedChip[index] ? theme.colors.blue200 : "white"
                  }
                >
                  {text}
                </Chip>
              ))}
            </S.ChipWrapper>
          </S.TitleWrapper>
        </S.TopWrapper>
        <Button
          disabled={selectedCount === 3 ? false : true}
          onClick={handleSubmit}
        >
          누구 생성하기
        </Button>
      </S.SignUpWrapper>
    </Layout>
  );
};
