import styled from "styled-components";

export const textfield = styled.div`
  display: flex;
  width: 303px;
  height: 83px;
  padding-bottom: 5px;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;
export const textTitle = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.blue300};
  font-family: ${({ theme }) => theme.fonts.Pretendard["font-family"]};
  font-size: 15px;
  font-weight: 600;
`;
export const InputContainer = styled.input`
  display: flex;
  width: 303px;
  height: 45px;
  padding: 13px 15px;
  align-items: center;
  gap: 10px;
  border-radius: 10.168px;
  border: 2px solid #d2deef;
  background: #fff;
  outline: none;
`;
