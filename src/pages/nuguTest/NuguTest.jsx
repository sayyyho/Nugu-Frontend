import * as S from "./styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@components/common/layout/Layout";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { NuguTestNone } from "@components/nuguTest/NuguTestNone";
import { NuguTestHome } from "@components/nuguTest/NuguTestHome";
import { Button } from "@components/common/button/Button";
import { NuguTestTrue } from "@components/nuguTest/NuguTestTrue";
import { isMakeTestOwner } from "@atoms/nuguTestState";
import { useRecoilState } from "recoil";
//토근 여부로 워딩 다르게 표현
export const NuguTestPage = () => {
  const [isMakeTest, setIsMakeTest] = useRecoilState(isMakeTestOwner);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTestStatus = async () => {
      try {
        const hasTest = false; // 서버에서 받은 값 (예시로 true로 설정)
        setIsMakeTest(hasTest); // 상태 업데이트
        console.log("isMakeTest updated:", hasTest);
      } catch (error) {
        console.error("실패", error);
      }

      fetchTestStatus(); // API 호출
    };
  }, []); // 의존성 배열에서 isMakeTest 제거

  const moveOnTest = () => {
    navigate("/test/make");
  };

  const array = [];

  return (
    <Layout>
      <NavigateBar />
      <S.TestContainer>
        {isMakeTest ? (
          array.length === 0 ? (
            <NuguTestNone isTestOwner={true} />
          ) : (
            <NuguTestTrue username={"하채민"} ranking={array} />
          )
        ) : (
          <>
            <NuguTestHome username={"하채민"} isOwner={true} />
            <Button disabled={false} onClick={() => moveOnTest()}>
              누구테스트 만들러 가기
            </Button>
          </>
        )}
      </S.TestContainer>
    </Layout>
  );
};
