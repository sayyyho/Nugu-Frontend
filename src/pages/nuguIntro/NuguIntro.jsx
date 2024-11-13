import * as S from "./styled";
import Nuguhalf from "/images/nugu-half.svg";
import GointroIcon from "/images/GointroIcon.svg";
import BlueCloud from "/images/BlueCloud.svg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { RankingBox } from "@components/rankingBox/RankingBox";
import { IntroField } from "@components/common/introField/IntroField";
import { Layout } from "@components/common/layout/Layout";
import { useParams } from "react-router-dom";
import { getIntroList } from "@apis/nuguIntro";
export const NuguIntro = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [introList, setIntroList] = useState([]);

  useEffect(() => {
    if (!uuid) return;
    const fetchData = async () => {
      try {
        const Data = await getIntroList(uuid);
        setIntroList(Data.data);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, [uuid]);

  const isNuguIntro = introList && introList.length > 0 ? introList : null;

  const moveOnintro = () => {
    navigate(`/nuguIntro/write/${uuid}`);
  };
  return (
    <Layout $margin="4rem 0 0 0" $justifyContent="start">
      <S.Wrapper>
        <NavigateBar />
        <img src={BlueCloud} />
        <S.RankingWrapper>
          <RankingBox NuguIntroRank={introList} />
          <S.GoIntroConT>
            <div id="gointro" onClick={() => moveOnintro()}>
              누구 소개하기
            </div>
            <img src={GointroIcon} />
          </S.GoIntroConT>
          <S.TextFieldConT>
            <img src={Nuguhalf} />
            <IntroField isNuguIntro={isNuguIntro} />
          </S.TextFieldConT>
        </S.RankingWrapper>
      </S.Wrapper>
    </Layout>
  );
};
