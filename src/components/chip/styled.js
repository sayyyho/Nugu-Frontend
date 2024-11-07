import styled from "styled-components";

export const Chip = styled.button`
  display: flex;
  width: 100%;
  height: 2rem;
  /* padding: 0.375rem 1rem; */

  border-radius: 3rem;

  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

  color: ${({ theme }) => theme.colors.blue300};
  ${({ theme }) => theme.fonts.pretendardB2};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
