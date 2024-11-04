import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray200};
  gap: 4rem;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;

export const imgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
