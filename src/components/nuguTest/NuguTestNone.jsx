import * as S from "./styled";
import SadCloud from "/images/nugu-sad.svg";
import { NONE_TEXTS } from "@constants/nuguTest";

export const NuguTestNone = ({ isTest }) => {
  const isTestEmptyArray = Array.isArray(isTest) && isTest.length === 0;
  const texts = isTestEmptyArray
    ? NUGU_TEST_TEXTS.emptyArray
    : NUGU_TEST_TEXTS.nonEmptyArray;
  return (
    <S.TestContainer>
      <img src={SadCloud} />
      <S.FirstTextWrapper>
        <S.FirstTextContainer>
          <S.TextTitle>누구테스트</S.TextTitle>
          <div>{texts.subtitle[0]}</div>
        </S.FirstTextContainer>
        <div>{texts.subtitle[1]}</div>
      </S.FirstTextWrapper>
      <S.SubTextWrapper>
        <S.HomeSubTextTitle>{texts.subtext[0]}</S.HomeSubTextTitle>
        <S.HomeSubTextTitle>{texts.subtext[1]}</S.HomeSubTextTitle>
      </S.SubTextWrapper>
    </S.TestContainer>
  );
};
