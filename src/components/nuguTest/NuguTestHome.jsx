import * as S from "./styled";
import NuguHeart from "/images/nugu-heart.svg";
import { HOME_TEXT } from "@constants/nuguTest";
export const NuguTestHome = ({ username }) => {
  return (
    <S.TestContainer>
      <img src={NuguHeart} />
      <S.FirstTextWrapper>
        <S.FirstTextContainer>
          <S.TextTitle>{username}의</S.TextTitle>
        </S.FirstTextContainer>
        <S.TextTitle>누구테스트</S.TextTitle>
      </S.FirstTextWrapper>
      <S.SubTextWrapper>
        <S.SubTextTitle>{HOME_TEXT[0]}</S.SubTextTitle>
        <S.SubTextTitle>{HOME_TEXT[1]}</S.SubTextTitle>
      </S.SubTextWrapper>
    </S.TestContainer>
  );
};
