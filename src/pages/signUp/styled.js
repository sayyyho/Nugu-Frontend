import styled from "styled-components";

export const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 2rem 0 4rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TopWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.875rem;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.blue300};
  ${({ theme }) => theme.fonts.pretendardB4};
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.blue300};
  ${({ theme }) => theme.fonts.pretendardB1};
`;

export const ChipWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  place-items: center;

  row-gap: 0.625rem;
  column-gap: 1rem;

  margin-top: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
`;

export const NuguMainText = styled.p`
  ${({ theme }) => theme.fonts.lotteriaChabH1}
  color: var(--blue300, #3782ED);
  -webkit-text-stroke: 1px white;
`;

export const NuguSubText = styled.h1`
  ${({ theme }) => theme.fonts.pretendardH1}
  color: #3782ed;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
`;

export const NuguCreateImg = styled.img`
  height: 11rem;
`;
export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red200};
  ${({ theme }) => theme.fonts.pretendardB4};
  padding-left: 5px;
  font-size: 0.8rem;
`;
