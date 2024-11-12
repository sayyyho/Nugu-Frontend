import * as S from "./styled";
import styled from "styled-components";
import NUGU_CREATE_IMAGE from "/images/NuguCreateImg.svg";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #d2deef 0%, #fff 100%);
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  gap: 3rem;
  padding-bottom: 1rem;
`;

export const NuguCreate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Wrapper>
      <S.TextWrapper>
        <S.NuguMainText>누구</S.NuguMainText>
        <S.NuguSubText>를 생성했어요!</S.NuguSubText>
      </S.TextWrapper>
      <S.NuguCreateImg src={NUGU_CREATE_IMAGE} alt="누구생성 이미지" />
    </Wrapper>
  );
};
