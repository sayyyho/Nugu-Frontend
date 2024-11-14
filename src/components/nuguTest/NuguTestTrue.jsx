//소유자가 테스트를 만듦 & 테스트를 진행한 사람이 존재
import * as S from "./styled";

import { useEffect, useState } from "react";

import { NuguTestRanking } from "@components/nuguTestRanking/NuguTestRanking";

import { getNuguTestRanking } from "@apis/nuguTest";

export const NuguTestTrue = ({ username }) => {
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const data = await getNuguTestRanking();
        setRanking(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRanking();
  }, []);
  return (
    <S.UserRankWrapper>
      <S.UserTextWrapper>
        <div>{username}의</div>
        <div>누구테스트 순위</div>
      </S.UserTextWrapper>
      <S.TestRank>
        <NuguTestRanking ranking={ranking} isComplete={false} />
      </S.TestRank>
    </S.UserRankWrapper>
  );
};
