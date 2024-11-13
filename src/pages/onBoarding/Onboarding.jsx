import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import NuguLogo from "/images/NuguLogo.png";
import Cloud from "/images/Cloud.png";
import StarNugu from "/images/StarNugu.png";
import { Logo } from "@components/common/logo/Logo";
import { Button } from "@components/common/button/Button";
import { Layout } from "@components/common/layout/Layout";
export const Onboarding = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signUp/1");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <Layout $margin="0 0 0 0" $justifyContent="start">
      <S.Wrapper>
        <S.LogoContainer>
          <img src={Cloud} alt="구름" />
          <Logo logo={NuguLogo} />
          <img src={StarNugu} alt="starnugu" />
        </S.LogoContainer>
        <S.BtnContainer>
          <Button disabled={false} onClick={handleSignup}>
            누구 생성하기
          </Button>
          <button id="loginBtn" onClick={handleLogin}>
            로그인
          </button>
        </S.BtnContainer>
      </S.Wrapper>
    </Layout>
  );
};
