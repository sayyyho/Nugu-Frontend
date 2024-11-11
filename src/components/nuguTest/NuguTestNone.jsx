//소유자가 테스트를 만듦 & 테스트를 진행한 사람이 존재하지 않음
import * as S from "./styled";
import SadCloud from "/images/nugu-sad.svg";
import { NONE_TEXTS } from "@constants/nuguTest";

export const NuguTestNone = ({ isTestOwner }) => {
  const texts = isTestOwner ? NONE_TEXTS.ownerView : NONE_TEXTS.nonOwnerView;
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
