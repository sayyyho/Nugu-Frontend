import * as S from "./styled";
import { theme } from "@styles/theme";
import { ProgressBar } from "@components/progressBar/ProgreesBar";
import { Input } from "@components/input/Input";
import { Button } from "@components/common/button/Button";
import { Chip } from "@components/chip/Chip";
import { CHIP_DATA } from "@constants/chip";

import { useNavigate } from "react-router-dom";
import { useIntroForm } from "./_hooks/useIntroForm";
import { postIntro } from "@apis/nuguIntro";
import { useParams } from "react-router-dom";
export const WriteIntro = () => {
  const {
    content,
    handleChangeContent,
    handleClickStatus,
    keyword1,
    keyword2,
    keyword3,
    selectedChip,
    selectedCount,
  } = useIntroForm();

  const navigate = useNavigate();
  const { uuid } = useParams();

  const handleSubmit = async () => {
    try {
      const response = await postIntro({
        content,
        keyword1,
        keyword2,
        keyword3,
        uuid,
      });
      if (response) {
        navigate(-1);
      }
      return response;
    } catch (err) {
      throw err;
    }
  };
  return (
    <S.IntroContainer>
      <ProgressBar title={"누구 소개하기"} $now={4} $total={4} />
      <S.InfoWrapper>
        <Input
          title={"누구를 소개하자면?"}
          name="content"
          placeholder={"누구 소개를 입력해 주세요 (150자 이내)"}
          value={content}
          onChange={handleChangeContent}
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
        disabled={selectedCount !== 3 || content.length === 0}
        onClick={handleSubmit}
      >
        저장하기
      </Button>
    </S.IntroContainer>
  );
};
