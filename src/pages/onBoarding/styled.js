import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #d2deef 0%, #fff 100%);
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  gap: 3rem;
  padding-bottom: 4rem;
  padding-top: 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 375px) {
    gap: 1.5rem;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  #loginBtn {
    color: ${({ theme }) => theme.colors.blue300};
    font-family: ${({ theme }) => theme.fonts.pretendardB3};
    cursor: pointer;
  }
`;
