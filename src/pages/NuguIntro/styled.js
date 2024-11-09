import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const rankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  align-items: center;
  #gointro {
    ${({ theme }) => theme.fonts.pretendardB4};
    color: ${({ theme }) => theme.colors.blue300};
  }
`;
export const GointroConT = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: center;
  align-items: center;
  #gointro {
    ${({ theme }) => theme.fonts.pretendardB4};
    color: ${({ theme }) => theme.colors.blue300};
    cursor: pointer;
  }
`;
export const textFieldConT = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  justify-content: center;
  align-items: center;
`;

//writeIntro
export const introContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  gap: 3rem;
`;

export const infoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  align-items: center;
  gap: 30px;
`;

export const TitleWrapper = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
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
