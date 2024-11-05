import * as S from "./styled";

export const ProgressBar = ({ title }) => {
  return (
    // TODO - ProgreesBar 몇 등분인지 받아서 분할
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
