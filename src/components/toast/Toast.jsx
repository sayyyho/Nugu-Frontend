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
  background-color: ${({ type }) =>
    type === "success" ? "#4caf50" : "#f44336"}; /* 성공: 초록, 실패: 빨강 */
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.5s ease;
  ${({ theme }) => theme.fonts.pretendardB4}
  z-index: 9999;
`;
