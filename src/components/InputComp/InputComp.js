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
  width: 303px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #3782ed;

  /* pretendard/semibold/15 */
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--gray100, #fff);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
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
`;
