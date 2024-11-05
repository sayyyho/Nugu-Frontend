import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0px 1rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.fonts.pretendardB5}
  ${({ theme }) => theme.colors.gray500}
`;
