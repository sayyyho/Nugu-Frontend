//접속자가 테스트 완료 후 3등까지 랭킹 보여줌
import * as S from "./styled";
import { NonRankingBox } from "@components/nuguTestRanking/NonRankingBox";
import { Button } from "@components/common/button/Button";
export const CompleteTest = ({ ranking, onClickChange }) => {
  const handleClick = () => {
    onClickChange(true);
  };
  return (
    <>
      <S.TitleWrapper>
        <S.CompleteText>테스트 완료!</S.CompleteText>

        <S.SubTextWrapper>
          <S.SubTextTitle>누구테스트를 완료했어요!</S.SubTextTitle>
          <S.SubTextTitle>내가 얼마나 맞혔는지 확인해 볼까요?</S.SubTextTitle>
        </S.SubTextWrapper>
      </S.TitleWrapper>
      <S.RankingBox>
        <S.RankingTitle>누구 테스트 랭킹</S.RankingTitle>
        <NonRankingBox ranking={ranking} isComplete={true} />
      </S.RankingBox>
      <Button onClick={handleClick} disabled={false}>
        전체 순위 확인하기
      </Button>
    </>
  );
};
