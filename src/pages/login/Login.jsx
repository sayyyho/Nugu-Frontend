import * as S from "./styled";

import React, { useState } from "react";
import { Logo } from "@components/common/logo/Logo";
import { Button } from "@components/common/button/Button";
import { Input } from "@components/input/Input";
import NuguLogo from "/images/small_logo.svg";
import StarNugu from "/images/nugu-star.svg";

import { useForm } from "@hooks/useForm";
import { loginState } from "@atoms/loginState";
import { postLogin } from "@apis/login";
export const Login = () => {
  const { form, handleChange, isValid } = useForm(loginState);

  const handleLogin = async () => {
    console.log(form);
    await postLogin(form);
  };
  return (
    <S.Wrapper>
      <Logo logo={NuguLogo} />
      <S.ImgWrapper>
        <img src={StarNugu} alt="starnugu" />
        <S.BtnContainer>
          <Input
            title={"아이디"}
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder={"아이디를 입력해 주세요"}
          />
          <Input
            title={"비밀번호"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder={"비밀번호를 입력해 주세요"}
          />
        </S.BtnContainer>
        <Button disabled={!isValid} onClick={handleLogin}>
          로그인
        </Button>
      </S.ImgWrapper>
    </S.Wrapper>
  );
};
