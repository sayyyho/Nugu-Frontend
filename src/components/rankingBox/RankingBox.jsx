//누구 소개 랭킹 컴포넌트
import * as S from "./styled";
export const RankingBox = ({ NuguIntroRank }) => {
  const rank = [2, 1, 3];
  const isNuguIntroRank =
    NuguIntroRank && Object.keys(NuguIntroRank).length > 0
      ? NuguIntroRank
      : null;
  return (
    <S.RankingContainer>
      {rank.map((item) => {
        const keyword = isNuguIntroRank
          ? isNuguIntroRank[`keyword${item}`]
          : "키워드";

        return (
          <S.RankingBox key={item}>
            <div id="rank">{item}</div>
            <div id="keyword">{keyword}</div>
            <S.Rankstyled $boxHeight={item} />
          </S.RankingBox>
        );
      })}
    </S.RankingContainer>
  );
};
