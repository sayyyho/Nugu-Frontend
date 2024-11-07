import styled from "styled-components";
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 9px;
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.colors.blue300};
  ${({ theme }) => theme.fonts.pretendardB5}
`;
