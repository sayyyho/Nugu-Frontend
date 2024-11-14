import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { NuguTestRanking } from "@components/nuguTestRanking/NuguTestRanking";
import { BottomBtn } from "@components/common/button/BottomBtn";
import Cookies from "js-cookie";
export const TestRanking = ({
  username,
  correctAnswers,
  rank,
  ranking,
  highlightIndex,
}) => {
  const navigate = useNavigate();
  const moveOnHome = () => {
    navigate(`/challenge/${Cookies.get("uuid")}`);
  };
  return (
    <>
      <S.TitleWrapper>
        <S.CompleteText>{username}의</S.CompleteText>
        <S.CompleteText>누구 테스트 순위</S.CompleteText>
        <S.SubTextWrapper>
          <S.ChallengerScore>
            내 점수 : {correctAnswers}/10 ({rank}위)
          </S.ChallengerScore>
        </S.SubTextWrapper>
      </S.TitleWrapper>
      <S.TotalRankingContainer>
        <NuguTestRanking ranking={ranking} highlightIndex={highlightIndex} />
      </S.TotalRankingContainer>
      <BottomBtn disabled={false} onClick={moveOnHome}>
        홈으로 이동하기
      </BottomBtn>
    </>
  );
};
