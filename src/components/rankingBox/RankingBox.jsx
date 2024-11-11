//누구 소개 랭킹 컴포넌트
import * as S from "./styled";
export const RankingBox = () => {
  const rank = [2, 1, 3];

  return (
    <S.RankingContainer>
      {rank.map((item) => {
        return (
          <S.RankingBox key={item}>
            <div id="rank">{item}</div>
            <div id="keyword">키워드</div>
            <S.Rankstyled boxHeight={item} />
          </S.RankingBox>
        );
      })}
    </S.RankingContainer>
  );
};
