import styled from "styled-components";

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-top: 5rem;
`;

export const FirstTextWrapper = styled.div`
  display: flex;
  width: 241px;
  gap: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.fonts.pretendardB3};
`;
export const FirstTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TextTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.lotteriaChabH2};
  color: ${({ theme }) => theme.colors.gray500};
`;
export const SubTextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubTextTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.pretendardB1};
  color: ${({ theme }) => theme.colors.gray400};
`;

//Home
export const HomeSubTextTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.pretendardB1};
  color: ${({ theme }) => theme.colors.gray400};
`;
//True

export const UserRankWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  min-height: 100vh;
  margin: 2rem 0;
`;
export const UserTextWrapper = styled.div`
  display: flex;
  width: 218px;
  flex-direction: column;
  align-items: center;
  gap: -10px;
  ${({ theme }) => theme.fonts.lotteriaChabH2};
  color: ${({ theme }) => theme.colors.blue300};
`;
export const TestRank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
//CompleteTest

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
`;
export const CompleteText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.lotteriaChabH2};
  color: ${({ theme }) => theme.colors.blue300};
`;
export const RankingBox = styled.div`
  width: 280px;
  height: 300px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.blue100};
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
  gap: 18px;
`;
export const RankingTitle = styled.div`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.lotteriaChabB3};
  -webkit-text-stroke-color: #3782ed;
  -webkit-text-stroke-width: 1px;
  text-shadow: 0px 2px 5px rgba(55, 130, 237, 0.5);
`;
export const TotalRankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;

  gap: 20px;
`;
//ranking
export const ChallengerScore = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.pretendardB3};
  color: ${({ theme }) => theme.colors.gray400};
`;
