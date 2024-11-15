import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 2rem;
`;

export const TestQuestionWrapper = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  margin-top: 2rem;
  justify-content: center;
  gap: 7px;
  align-items: center;
  ${({ theme }) => theme.fonts.pretendardH2}
`;
export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 260px;
`;
export const AnswerBox = styled.div`
  display: flex;
  height: 140px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  cursor: pointer;
  border-radius: 15px;
  ${({ theme }) => theme.fonts.pretendardB4}

  box-shadow: ${({ $isSelected, $isAnswerCorrect }) =>
    $isSelected
      ? $isAnswerCorrect // 정답인지 확인
        ? "0px 0px 10px 0px rgba(55, 130, 237, 0.50)" //파
        : "0px 0px 10px 0px rgba(255, 0, 0, 0.50)" //빨
      : "none"};

  border: 1px solid
    ${({ theme, $isSelected, $isAnswerCorrect }) =>
      $isSelected
        ? $isAnswerCorrect
          ? theme.colors.blue300
          : theme.colors.red200
        : theme.colors.blue300};

  background: ${({ theme, $isSelected, $isAnswerCorrect }) =>
    $isSelected
      ? $isAnswerCorrect
        ? theme.colors.blue100
        : theme.colors.red100
      : theme.colors.gray100};
`;
