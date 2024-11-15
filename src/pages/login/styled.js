import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  min-height: 100vh;
  padding: 1rem 0;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red200};
  ${({ theme }) => theme.fonts.pretendardB4};

  font-size: 0.8rem;
`;
