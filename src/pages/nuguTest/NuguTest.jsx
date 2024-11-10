import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { Layout } from "@components/common/layout/Layout";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { NuguTestNone } from "@components/nuguTest/NuguTestNone";
import { NuguTestRanking } from "@components/nuguTestRanking/NuguTestRanking";
import { NuguTestHome } from "@components/nuguTest/NuguTestHome";
import { Button } from "@components/common/button/Button";

//토근 여부로 워딩 다르게 표현
export const NuguTestPage = () => {
  const navigate = useNavigate();
  const moveOnTest = () => {
    navigate("/maketest");
  };
  const hasTest = true;
  const array = [];
  return (
    <Layout>
      <NavigateBar />
      <S.TestContainer>
        {hasTest ? (
          <>
            <NuguTestHome username={"하채민"} />
            <Button disabled={false} onClick={() => moveOnTest()}>
              누구테스트 만들러 가기
            </Button>
          </>
        ) : (
          <NuguTestNone isTest={array} />
        )}
        <NuguTestRanking ranking={array} />
      </S.TestContainer>
    </Layout>
  );
};
