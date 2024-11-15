import * as S from "./styled";
import React from "react";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Logo } from "@components/common/logo/Logo";
import { Button } from "@components/common/button/Button";
import { Input } from "@components/input/Input";
import { useForm } from "@hooks/useForm";
import { loginState } from "@atoms/loginState";
import { postLogin } from "@apis/login";
import { getUUID } from "@apis/uuid";
import { Layout } from "@components/common/layout/Layout";
import { ToastContainer } from "@components/toast/Toast";
import { useToast } from "@hooks/useToast";

import NuguLogo from "/images/SmallLogo.png";
import StarNugu from "/images/StarNugu.png";

export const Login = () => {
  const { showToast, toast } = useToast();
  const { form, handleChange, isValid } = useForm(loginState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (form.username.length === 0 || form.username.length > 20) {
      newErrors.username = "아이디는 20자 이내로 작성해주세요.";
    }
    if (form.password.length < 8 || form.password.length > 16) {
      newErrors.password = "비밀번호는 8-16자로 작성해주세요.";
    }
    return newErrors;
  };

  const performAPI = async () => {
    try {
      await postLogin(form);
      await getUUID();
      const uuid = Cookies.get("uuid");
      if (uuid) {
        showToast("로그인 성공", "success");

        setTimeout(() => {
          navigate(`/nugu/${uuid}`);
        }, 1500);
      } else {
        console.error("UUID를 찾을 수 없습니다.");
      }
    } catch (error) {
      showToast("아이디나 비밀번호를 확인해주세요", "error");
    }
  };

  const handleLogin = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      performAPI();
    }
  };

  return (
    <Layout $backgroundColor={"gray200"} $justifyContent="start">
      {toast.visible && (
        <ToastContainer type={toast.type}>{toast.message}</ToastContainer>
      )}
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
            {errors.username && (
              <S.ErrorMessage>{errors.username}</S.ErrorMessage>
            )}
            <Input
              title={"비밀번호"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={"비밀번호를 입력해 주세요"}
              type="password"
            />
            {errors.password && (
              <S.ErrorMessage>{errors.password}</S.ErrorMessage>
            )}
          </S.BtnContainer>
          <Button disabled={!isValid} onClick={handleLogin}>
            로그인
          </Button>
        </S.ImgWrapper>
      </S.Wrapper>
    </Layout>
  );
};
