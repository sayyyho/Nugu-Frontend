import * as S from "./styled";
import { Layout } from "@components/common/layout/Layout";
import { theme } from "@styles/theme";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { Input } from "@components/input/Input";
import { Button } from "@components/common/button/Button";
import { Chip } from "@components/chip/Chip";
import { CHIP_DATA } from "@constants/chip";

import { useChip } from "@pages/signUp/_hooks/useChip";
import { useForm } from "@hooks/useForm";
import { atom } from "recoil";
import { useNavigate } from "react-router-dom";
const formAtom = atom({
  key: "formAtom",
  default: { content: "" },
});

export const WriteIntro = () => {
  const { selectedChip, handleClickStatus, selectedCount } = useChip();
  const { form, handleChange, isValid } = useForm(formAtom);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/intro");
  };
  return (
    <Layout>
      <S.IntroContainer>
        <ProgressBar title={"누구 소개하기"} $now={4} $total={4} />
        <S.InfoWrapper>
          <Input
            title={"누구를 소개하자면?"}
            name="content"
            placeholder={"누구 소개를 입력해 주세요 (150자 이내)"}
            value={form.content}
            onChange={handleChange}
          />

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
        </S.InfoWrapper>
        <Button
          disabled={selectedCount !== 3 || !isValid}
          onClick={handleSubmit}
        >
          저장하기
        </Button>
      </S.IntroContainer>
    </Layout>
  );
};
