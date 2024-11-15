import styled from "styled-components";
export const PatchWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0 4rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;

export const TopWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.875rem;
`;
export const TitleWrapper = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.blue300};
  ${({ theme }) => theme.fonts.pretendardB4};
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.blue300};
  ${({ theme }) => theme.fonts.pretendardB1};
`;

export const ChipWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  place-items: center;

  row-gap: 0.625rem;
  column-gap: 1rem;

  margin-top: 1rem;
`;
export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red200};
  ${({ theme }) => theme.fonts.pretendardB4};

  font-size: 0.8rem;
`;
