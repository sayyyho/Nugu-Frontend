//접속자 뷰- 누구테스트 홈

import * as S from "./styled";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "@components/common/layout/Layout";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { NuguTestNone } from "@components/nuguTest/NuguTestNone";
import { NuguTestHome } from "@components/nuguTest/NuguTestHome";
import { Button } from "@components/common/button/Button";
import { getGuestViewIsUserTest } from "@apis/nuguTest";
import { useSetRecoilState } from "recoil";
import { testUser } from "@atoms/testUser";

import Cookies from "js-cookie";

export const NuguChallenge = () => {
  const { uuid } = useParams();
  const [isTestMake, setIsTestMake] = useState(false);
  const setTestUser = useSetRecoilState(testUser);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGuestViewIsUserTest(uuid);
        setIsTestMake(data.hasTest);
      } catch (err) {
        throw err;
      }
    };
    fetchData();
  }, []);
  //수정 필요
  const moveOnTest = () => {
    navigate(`/challenge/test/${Cookies.get("")}`);
  };
  return (
    <Layout $margin="3rem 0 0 0" $justifyContent="start">
      <NavigateBar />
      <S.TestContainer>
        {isTestMake ? (
          <>
            <NuguTestHome username={Cookies.get("nickname")} />
            <S.NichNameCase
              placeholder="닉네임을 입력해 주세요."
              onChange={(e) => setTestUser(e.target.value)}
            ></S.NichNameCase>
            <Button disabled={false} onClick={moveOnTest}>
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
