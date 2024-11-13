//소유자뷰- 누구테스트 홈
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

import { getNuguTestStatus } from "@apis/nuguTest";
import Cookies from "js-cookie";

//토큰 여부로 워딩 다르게 표현
export const NuguTestPage = () => {
  const [isMakeTest, setIsMakeTest] = useRecoilState(isMakeTestOwner);
  const navigate = useNavigate();
  //test
  useEffect(() => {
    const fetchTestStatus = async () => {
      try {
        const hasTest = await getNuguTestStatus();
        //누구 테스트 사용자-get
        setIsMakeTest(hasTest);
      } catch (error) {
        console.error("실패", error);
      }

      fetchTestStatus();
    };
  }, []);

  const moveOnTest = () => {
    navigate("/test/make");
  };

  const array = [
    // {
    //   nickname: "응시자3",
    //   correctAnswers: 9,
    //   rank: 1,
    //   totalParticipants: 3,
    // },
    // {
    //   nickname: "응시자1",
    //   correctAnswers: 7,
    //   rank: 2,
    //   totalParticipants: 3,
    // },
    // {
    //   nickname: "응시자2",
    //   correctAnswers: 7,
    //   rank: 2,
    //   totalParticipants: 3,
    // },
  ];

  return (
    <Layout $margin="3rem 0 0 0" $justifyContent="start">
      <NavigateBar />
      <S.TestContainer>
        {isMakeTest ? (
          array.length === 0 ? (
            <NuguTestNone isTestOwner={true} />
          ) : (
            <NuguTestTrue username={Cookies.get("nickname")} ranking={array} />
          )
        ) : (
          <>
            <NuguTestHome username={Cookies.get("nickname")} isOwner={true} />
            <Button disabled={false} onClick={() => moveOnTest()}>
              누구테스트 만들러 가기
            </Button>
          </>
        )}
      </S.TestContainer>
    </Layout>
  );
};
