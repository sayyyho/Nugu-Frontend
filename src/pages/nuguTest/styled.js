import styled from "styled-components";

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 1rem;
`;
//makeTest

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 2rem;
`;

export const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 2rem;
  padding-top: 1rem;
  margin-bottom: 5rem;
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
  border-radius: 15px;
  ${({ theme }) => theme.fonts.pretendardB4}
  box-shadow: ${({ $isSelected, $isAnswer }) =>
    $isSelected
      ? $isAnswer
        ? "0px 0px 10px 0px rgba(55, 130, 237, 0.50)"
        : "0px 0px 10px 0px rgba(255, 0, 0, 0.50)"
      : "none"};

  border: 1px solid
    ${({ theme, $isSelected, $isAnswer }) =>
      $isSelected
        ? $isAnswer
          ? theme.colors.blue300
          : theme.colors.red200
        : theme.colors.blue300};
  background: ${({ theme, $isSelected, $isAnswer }) =>
    $isSelected
      ? $isAnswer
        ? theme.colors.blue100
        : theme.colors.red100
      : theme.colors.gray100};
`;
//challenge
export const NichNameCase = styled.input`
  display: flex;
  width: 250px;
  height: 40px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
  background: ${({ theme }) => theme.colors.gray200};
  outline: none;
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400} !important;
    ${({ theme }) => theme.fonts.pretendardB3}
  }
`;
