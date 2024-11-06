import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0px 1rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.fonts.pretendardB5}
  ${({ theme }) => theme.colors.gray500}
`;

export const ProgressWrapper = styled.div`
  width: 100%;
  height: 0.1875rem;
  border-radius: 1.25rem;

  display: flex;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${({ $total, $now }) => `calc(${($now / $total) * 100}%)`};
  background-color: ${({ theme }) => theme.colors.blue300};
`;

export const NonProgress = styled.div`
  height: 100%;
  width: ${({ $total, $now }) => `calc(${100 - ($now / $total) * 100}%)`};
  background-color: ${({ theme }) => theme.colors.gray300};
`;
