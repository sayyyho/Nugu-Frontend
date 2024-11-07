import * as S from "./styled";
import React, { useState } from "react";
import { Logo } from "../../components/common/logo/Logo";
import { Button } from "../../components/common/button/Button";
import { Input } from "../../components/input/Input";
import NuguLogo from "../../assets/small_logo.svg";
import StarNugu from "../../assets/nugu-star.svg";

export const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log("Form Updated:", { ...form, [name]: value });
  };
  const isValid = form.username.trim() !== "" && form.password.trim() !== "";
  const handleLogin = () => {
    console.log("버튼눌림");
  };
  return (
    <S.Wrapper>
      <Logo logo={NuguLogo} />
      <S.imgWrapper>
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
      </S.imgWrapper>
    </S.Wrapper>
  );
};
