import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import BlueCloud from "/images/BlueCloud.svg";
import { RankingBox } from "@components/rankingBox/RankingBox";
import GointroIcon from "/images/GointroIcon.svg";
import Nuguhalf from "/images/nugu-half.svg";
import { IntroField } from "@components/common/introField/IntroField";
export const NuguIntro = () => {
  const navigate = useNavigate();
  const moveOnintro = () => {
    navigate("/intro/write");
  };
  return (
    <S.Wrapper>
      <NavigateBar />
      <img src={BlueCloud} />
      <S.RankingWrapper>
        <RankingBox />
        <S.GoIntroConT>
          <div id="gointro" onClick={() => moveOnintro()}>
            누구 소개하기
          </div>
          <img src={GointroIcon} />
        </S.GoIntroConT>
        <S.TextFieldConT>
          <img src={Nuguhalf} />
          <IntroField></IntroField>
        </S.TextFieldConT>
      </S.RankingWrapper>
    </S.Wrapper>
  );
};
