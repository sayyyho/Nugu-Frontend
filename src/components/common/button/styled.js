import styled from "styled-components";
export const Btn = styled.button`
  display: flex;
  width: 300px;
  height: 60px;
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
export const BottomBtn = styled.button`
  display: flex;
  height: 75px;
  width: 100%;
  max-width: 430px;
  padding: 24px 148px;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  ${({ theme }) => theme.fonts.pretendardB3}
  background-color: ${({ disabled }) => (disabled ? "#d2deef" : "#3782ED")};
  color: ${({ disabled }) => (disabled ? "#ffffff" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
