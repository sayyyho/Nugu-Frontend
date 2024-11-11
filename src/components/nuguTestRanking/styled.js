import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 0.722px solid
    ${({ theme, $isHighlighted }) =>
      $isHighlighted ? theme.colors.blue400 : "rgba(0, 0, 0, 0.07)"};
  background: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.colors.blue300 : theme.colors.blue100};
  box-shadow: ${({ $isHighlighted }) =>
    $isHighlighted
      ? "0px 0px 3px 0px rgba(55, 130, 237, 0.3)"
      : "0px 0px 2.887px 0px rgba(0, 0, 0, 0.25)"};
`;
export const Rank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 60px;
  padding: 21px 0px;
  color: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.colors.gray100 : theme.colors.gray500};
  ${({ theme }) => theme.fonts.lotteriaChabB1};
  border-right: 1px solid ${({ theme }) => theme.colors.gray300};
`;

export const RankImg = styled.img`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;
export const NickName = styled.div`
  display: flex;
  width: 125px;
  height: 60px;
  align-items: center;
  color: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.colors.gray100 : theme.colors.gray500};
  ${({ theme }) => theme.fonts.pretendardB1};
`;
export const MyRank = styled.div`
  display: flex;
  width: 65px;
  height: 60px;
  padding: 14px 1px 14px 0px;
  justify-content: center;
  align-items: center;
  color: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.colors.gray100 : theme.colors.gray500};
  border-left: 1px solid ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.lotteriaChabB1};
`;
