import styled from "styled-components";
export const textContainer = styled.div`
  display: flex;
  width: 304px;
  height: 132px;
  padding: 13px 15px;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
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
export const textfield = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border: none;
  outline: none;
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
