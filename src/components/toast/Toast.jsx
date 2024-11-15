import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 스타일 정의
export const ToastContainer = styled.div`
  position: fixed;
  top: 0;
  width: 80%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  background-color: ${({ type, theme }) =>
    type === "error" ? "#FEE9E9" : "#EAEFF8"};

  box-shadow: ${({ type }) =>
    type === "error"
      ? "0px 0px 10px 0px rgba(255, 0, 0, 0.50)"
      : "0px 0px 10px 0px rgba(55, 130, 237, 0.50)"};

  color: ${({ type, theme }) =>
    type === "error" ? theme.colors.red200 : theme.colors.blue300};
  padding: 1rem 2rem;
  border-radius: 0 0 0.5rem 0.5rem;
  animation: ${slideDown} 0.5s ease;
  ${({ theme }) => theme.fonts.pretendardB4}
  z-index: 9999;
`;
