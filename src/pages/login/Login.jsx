import * as S from "./styled";
import React from "react";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import { Logo } from "@components/common/logo/Logo";
import { Button } from "@components/common/button/Button";
import { Input } from "@components/input/Input";
import { useForm } from "@hooks/useForm";
import { loginState } from "@atoms/loginState";
import { postLogin } from "@apis/login";
import { getUUID } from "@apis/uuid";

import NuguLogo from "/images/SmallLogo.png";
import StarNugu from "/images/StarNugu.png";
import Cookies from "js-cookie";

export const Login = () => {
  const { form, handleChange, isValid } = useForm(loginState);
  const navigate = useNavigate();

  const handleLogin = async () => {
    await postLogin(form);
    await getUUID();
    navigate(`nugu/${Cookies.get("uuid")}`);
  };

  return (
    <S.Wrapper>
      <Logo logo={NuguLogo} />
      <S.ImgWrapper>
        <img src={StarNugu} alt="starnugu" loading="lazy" />
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
            type="password"
          />
        </S.BtnContainer>
        <Button disabled={!isValid} onClick={handleLogin}>
          로그인
        </Button>
      </S.ImgWrapper>
    </S.Wrapper>
  );
};
