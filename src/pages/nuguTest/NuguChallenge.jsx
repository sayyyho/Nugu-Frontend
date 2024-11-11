import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { Layout } from "@components/common/layout/Layout";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { NuguTestNone } from "@components/nuguTest/NuguTestNone";
import { NuguTestHome } from "@components/nuguTest/NuguTestHome";
import { Button } from "@components/common/button/Button";
import { isMakeTestOwner } from "@atoms/nuguTestState";
import { useRecoilValue } from "recoil";
//접속자 누구테스트 홈뷰
export const NuguChallenge = () => {
  const navigate = useNavigate();
  const isTestMake = true;
  const moveOnTest = () => {
    navigate("/");
  };
  return (
    <Layout>
      <NavigateBar />
      <S.TestContainer>
        {isTestMake ? (
          <>
            <NuguTestHome username={"하채민"} />
            <S.NichNameCase placeholder="닉네임을 입력해 주세요."></S.NichNameCase>
            <Button disabled={false} onClick={() => moveOnTest()}>
              테스트 시작하기
            </Button>
          </>
        ) : (
          <NuguTestNone isTestOwner={false} />
        )}
      </S.TestContainer>
    </Layout>
  );
};
