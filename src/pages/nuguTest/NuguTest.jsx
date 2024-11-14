import * as S from "./styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@components/common/layout/Layout";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { NuguTestNone } from "@components/nuguTest/NuguTestNone";
import { NuguTestHome } from "@components/nuguTest/NuguTestHome";
import { Button } from "@components/common/button/Button";
import { NuguTestTrue } from "@components/nuguTest/NuguTestTrue";
import { isMakeTestOwner } from "@atoms/nuguTestState";
import { useRecoilState } from "recoil";
import { getNuguTestStatus } from "@apis/nuguTest";
import Cookies from "js-cookie";

export const NuguTestPage = () => {
  const [isMakeTest, setIsMakeTest] = useRecoilState(isMakeTestOwner);
  const [participants, setParticipants] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestStatus = async () => {
      try {
        const data = await getNuguTestStatus();
        setIsMakeTest(data.hasTest);
        setParticipants(Number(data.totalParticipants));
      } catch (error) {
        console.error("실패", error);
      }
    };

    fetchTestStatus();
  }, []);

  const moveOnTest = () => {
    navigate("/test/make");
  };

  return (
    <Layout $margin="3rem 0 0 0" $justifyContent="start">
      <NavigateBar />
      <S.TestContainer>
        {isMakeTest ? (
          participants === 0 ? (
            <NuguTestNone isTestOwner={true} />
          ) : (
            <NuguTestTrue username={Cookies.get("nickname")} />
          )
        ) : (
          <>
            <NuguTestHome username={Cookies.get("nickname")} isOwner={true} />
            <Button disabled={false} onClick={moveOnTest}>
              누구테스트 만들러 가기
            </Button>
          </>
        )}
      </S.TestContainer>
    </Layout>
  );
};
