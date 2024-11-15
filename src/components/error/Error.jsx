import SadCloud from "/images/nugu-sad.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  /* padding-top: 5.5rem; */
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.fonts.pretendardB3};
`;

const TextTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.lotteriaChabH2};
  color: ${({ theme }) => theme.colors.gray500};
`;

const Button = styled.button`
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.blue300};
  width: 100%;
  max-width: 430px;
  height: 5rem;
  ${({ theme }) => theme.fonts.pretendardB4}
  color: white;
`;

export const Error = ({ title = "" }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={SadCloud} />
      <TextWrapper>
        <TextTitle>Error 발생!</TextTitle>
        {title && <div>{title}</div>}
      </TextWrapper>
      <Button onClick={() => navigate("/")}>처음으로 돌아가기</Button>
    </Container>
  );
};
