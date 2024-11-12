import * as S from "./styled";
import rank1 from "/images/rank1.svg";
import rank2 from "/images/rank2.svg";
import rank3 from "/images/rank3.svg";
import basisrank from "/images/basisrank.svg";
export const NuguTestRanking = ({ ranking, highlightIndex }) => {
  const getRankImage = (rank) => {
    if (rank === 1) return rank1;
    if (rank === 2) return rank2;
    if (rank === 3) return rank3;
    return basisrank;
  };
  return (
    <>
      {ranking.map((user, index) => (
        <S.Wrapper key={index} $isHighlighted={index === highlightIndex}>
          <S.Rank $isHighlighted={index === highlightIndex}>{index + 1}</S.Rank>
          <S.RankImg src={getRankImage(index + 1)} />
          <S.NickName $isHighlighted={index === highlightIndex}>
            {user.nickname}
          </S.NickName>
          <S.MyRank $isHighlighted={index === highlightIndex}>
            {user.rank}/{user.totalParticipants}
          </S.MyRank>
        </S.Wrapper>
      ))}
    </>
  );
};
