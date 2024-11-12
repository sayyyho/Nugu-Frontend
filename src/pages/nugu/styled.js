import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const MainTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const NuguTitle = styled.h1`
  ${({ theme }) => theme.fonts.lotteriaChabH1};
  color: ${({ theme }) => theme.colors.blue300};
  -webkit-text-stroke: white 1px;
`;

export const MBTITitle = styled.h1`
  ${({ theme }) => theme.fonts.pretendardH1};
  color: ${({ theme }) => theme.colors.blue300};
`;

export const MemberTitle = styled.p`
  ${({ theme }) => theme.fonts.pretendardB4};
  color: ${({ theme }) => theme.colors.blue300};
`;

export const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const BackgroundCircle = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 18.75rem;
  background-color: #fef9d5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloudImg = styled.img`
  width: 80%;
`;

export const Introduce = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.pretendardB4};
  color: ${({ theme }) => theme.colors.blue300};
`;

export const ChipWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const AdminWrapper = styled.div`
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ShareBtn = styled.button`
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.blue300};
  padding: 0.25rem 0.75rem;
  border-radius: 6.25rem;
  ${({ theme }) => theme.fonts.pretendardB4};
  color: ${({ theme }) => theme.colors.blue200};
`;

export const EditBtn = styled.button`
  background-color: transparent;
  ${({ theme }) => theme.fonts.pretendardB1};
  color: ${({ theme }) => theme.colors.blue100};
`;
