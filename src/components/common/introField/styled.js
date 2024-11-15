import styled from "styled-components";
export const TextContainer = styled.div`
  display: flex;
  width: 304px;
  height: 132px;
  padding: 13px 15px;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 1rem;
  border-radius: 10.168px;
  border: 1px solid ${({ theme }) => theme.colors.blue200};
  background: ${({ theme }) => theme.colors.gray100};
  outline: none;
  ${({ theme }) => theme.fonts.pretendardB1};
  color: ${({ theme }) => theme.colors.blue300};
  &::placeholder {
    color: ${({ theme }) => theme.colors.blue300};
  }
`;
export const Textfield = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border: none;
  outline: none;
  word-break: break-word;
  ${({ theme }) => theme.fonts.pretendardB1};
  color: ${({ theme }) => theme.colors.blue300};
  &::placeholder {
    color: ${({ theme }) => theme.colors.blue300};
  }
`;
export const Nugu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${({ theme }) => theme.fonts.lotteriaChabB2};
`;
