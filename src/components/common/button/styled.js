import styled from "styled-components";
export const LoginBtn = styled.button`
  display: flex;
  width: 300px;
  height: 60px;
  padding: 17px 96px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  ${({ theme }) => theme.fonts.pretendardB5}
  background-color: ${({ disabled }) => (disabled ? "#d2deef" : "#3782ED")};
  color: ${({ disabled }) => (disabled ? "#ffffff" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
