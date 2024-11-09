import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { NavigateBar } from "@components/common/NavigateBar/NavigateBar";
import BlueCloud from "@assets/BlueCloud.svg";
import { RankingBox } from "@components/Nuguintro/RankingBox/RankingBox";
import GointroIcon from "@assets/GointroIcon.svg";
import Nuguhalf from "@assets/nugu-half.svg";
import { IntroField } from "@components/Nuguintro/introField/introField";
export const NuguIntroPage = () => {
  const navigate = useNavigate();
  const moveOnintro = () => {
    navigate("/intro/write");
  };
  return (
    <S.Wrapper>
      <NavigateBar />
      <img src={BlueCloud} />
      <S.rankingWrapper>
        <RankingBox />
        <S.GointroConT>
          <div id="gointro" onClick={() => moveOnintro()}>
            누구 소개하기
          </div>
          <img src={GointroIcon} />
        </S.GointroConT>
        <S.textFieldConT>
          <img src={Nuguhalf} />
          <IntroField></IntroField>
        </S.textFieldConT>
      </S.rankingWrapper>
    </S.Wrapper>
  );
};
