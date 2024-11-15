import * as S from "./styled";
import styled from "styled-components";
import NUGU_CREATE_IMAGE from "/images/NuguCreateImg.svg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { signUpState } from "@atoms/signUpState";

import { Error } from "@components/error/Error";

import { postSignUp } from "@apis/signUp";
import { useToast } from "@hooks/useToast";

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
  const signUpData = useRecoilValue(signUpState);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const performPost = async () => {
      try {
        await postSignUp(signUpData);
        setTimeout(() => {
          navigate(`/`);
        }, 2500);
        return () => clearTimeout(timer);
      } catch (error) {
        setIsVisible(false);
        console.error("Sign up failed:", error);
      }
    };

    performPost();
  }, [navigate]);

  return (
    <Wrapper>
      {isVisible ? (
        <>
          <S.TextWrapper>
            <S.NuguMainText>누구</S.NuguMainText>
            <S.NuguSubText>를 생성했어요!</S.NuguSubText>
          </S.TextWrapper>
          <S.NuguCreateImg src={NUGU_CREATE_IMAGE} alt="누구생성 이미지" />
        </>
      ) : (
        <Error title={"동일한 아이디가 존재해요."}></Error>
      )}
    </Wrapper>
  );
};
