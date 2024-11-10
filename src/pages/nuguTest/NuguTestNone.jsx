import * as S from "./styled";
import { Layout } from "@components/common/layout/Layout";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { NuguTestNone } from "@components/nuguTestNone/NuguTestNone";
//토근 여부로 워딩 다르게 표현
export const NuguTestNonePage = () => {
  return (
    <Layout>
      <NavigateBar />

      <S.TestContainer>
        <NuguTestNone isTest={true} />
      </S.TestContainer>
    </Layout>
  );
};
