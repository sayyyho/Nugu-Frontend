import * as S from "./styled";
import SadCloud from "/images/nugu-sad.svg";
//배열로 정리할 예정
export const NuguTestNone = ({ isTest }) => {
  return (
    <S.TestContainer>
      <img src={SadCloud} />
      <S.FirstTextWrapper>
        <S.FirstTextContainer>
          <S.TextTitle>누구테스트</S.TextTitle>
          <div>{isTest === true ? "를" : "가"}</div>
        </S.FirstTextContainer>
        <div>
          {isTest === true
            ? "응시한 친구가 없어요!"
            : "아직 만들어지지 않았어요!"}
        </div>
      </S.FirstTextWrapper>
      <S.SubTextWrapper>
        <S.SubTextTitle>
          {isTest === true
            ? "친구들에게 누구테스트에 대해 알려주고, "
            : "누구테스트를 만들어달라고"}
        </S.SubTextTitle>
        <S.SubTextTitle>
          {isTest === true
            ? "친구들이 나에 대해서 얼마나 알고 있는지 확인해봐요!"
            : "살짝 제안해보는 건 어떨까요?"}
        </S.SubTextTitle>
      </S.SubTextWrapper>
    </S.TestContainer>
  );
};
