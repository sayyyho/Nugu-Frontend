import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import BlueCloud from "/images/BlueCloud.svg";
import { RankingBox } from "@components/rankingBox/RankingBox";
import GointroIcon from "/images/GointroIcon.svg";
import Nuguhalf from "/images/nugu-half.svg";
import { IntroField } from "@components/common/introField/IntroField";
import { Layout } from "@components/common/layout/Layout";
export const NuguIntro = () => {
  const navigate = useNavigate();
  const rank = [
    {
      keyword1: "순수한",
      keyword2: "관대한",
      keyword3: "다정한",
      intro_list: ["착한 친구입니다.", "재밌는 친구입니다~"],
    },
  ];
  //누구 소개-사용자get
  const isNuguIntro = rank && rank.length > 0 ? rank[0] : null;

  const moveOnintro = () => {
    navigate("/intro/write");
  };
  return (
    <Layout $margin="4rem 0 0 0" $justifyContent="start">
      <S.Wrapper>
        <NavigateBar />
        <img src={BlueCloud} />
        <S.RankingWrapper>
          <RankingBox NuguIntroRank={rank} />
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
