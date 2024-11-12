import styled from "styled-components";

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 304px;
  gap: 14px;
  justify-content: center;
  align-self: center;
  align-items: flex-end;
`;

export const RankingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  #rank {
    ${({ theme }) => theme.fonts.lotteriaChabH1};
  }
  #keyword {
    ${({ theme }) => theme.fonts.lotteriaChabB2};
  }
  color: ${({ theme }) => theme.colors.blue300};
`;

export const Rankstyled = styled.div`
  width: 92px;
  gap: 2px;
  border-radius: 10px 10px 0px 0px;
  background: ${({ theme }) => theme.colors.blue200};
  height: ${({ $boxHeight }) =>
    $boxHeight === 1 ? "130px" : $boxHeight === 2 ? "110px" : "90px"};
`;
