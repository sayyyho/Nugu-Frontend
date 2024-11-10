import * as S from "./styled";

export const ProgressBar = ({ title, $now, $total = 4 }) => {
  return (
    // TODO - ProgreesBar 몇 등분인지 받아서 분할
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ProgressWrapper>
        <S.Progress $now={$now} $total={$total} />
        <S.NonProgress $now={$now} $total={$total} />
      </S.ProgressWrapper>
    </S.Wrapper>
  );
};
