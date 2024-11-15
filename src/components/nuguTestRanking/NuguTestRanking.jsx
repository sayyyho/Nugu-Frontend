import * as S from "./styled";
import rank1 from "/images/rank1.svg";
import rank2 from "/images/rank2.svg";
import rank3 from "/images/rank3.svg";
import basisrank from "/images/basisrank.svg";
export const NuguTestRanking = ({
  ranking,
  highlightIndex = -1,
  isComplete,
}) => {
  const getRankImage = (rank) => {
    if (rank === 1) return rank1;
    if (rank === 2) return rank2;
    if (rank === 3) return rank3;
    return basisrank;
  };
  return (
    <>
      {ranking.map((user, index) => {
        const isHighlighted = highlightIndex !== -1 && index === highlightIndex;
        return (
          <S.Wrapper
            key={index}
            $isHighlighted={isHighlighted}
            $isComplete={isComplete}
          >
            <S.Rank $isHighlighted={isHighlighted} $isComplete={isComplete}>
              {index + 1}
            </S.Rank>
            <S.RankImg src={getRankImage(index + 1)} />
            <S.NickName $isHighlighted={isHighlighted} $isComplete={isComplete}>
              {user.nickname}
            </S.NickName>
            <S.MyRank $isHighlighted={isHighlighted} $isComplete={isComplete}>
              {user.correctAnswers}/10
            </S.MyRank>
          </S.Wrapper>
        );
      })}
    </>
  );
};
