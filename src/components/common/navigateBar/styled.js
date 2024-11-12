import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 430px;
  height: 49px;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.gray100};
`;
export const NavigateBox = styled.div`
  display: flex;
  width: 120px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.pretendardB3}
  position: relative;
  cursor: pointer;
  &.active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 44px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.blue300};
  }
`;
