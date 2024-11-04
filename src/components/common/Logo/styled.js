import styled from "styled-components";
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 9px;
`;
export const title = styled.div`
  color: ${({ theme }) => theme.colors.blue300};
  font-family: ${({ theme }) => theme.fonts.Pretendard["font-family"]};
  font-size: 17px;
`;
