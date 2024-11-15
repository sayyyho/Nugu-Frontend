//소유자의 테스트홈(테스트를 만들지 않았을 경우)
import * as S from "./styled";
import NuguHeart from "/images/nugu-heart.png";
import { HOME_TEXT } from "@constants/nuguTest";
export const NuguTestHome = ({ username, isOwner }) => {
  const texts = isOwner ? HOME_TEXT.Owner.text : HOME_TEXT.Challenger.text;
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
        <S.SubTextTitle>{texts[0]}</S.SubTextTitle>
        <S.SubTextTitle>{texts[1]}</S.SubTextTitle>
      </S.SubTextWrapper>
    </S.TestContainer>
  );
};
