import * as S from "./styled";
import { Layout } from "@components/common/layout/Layout";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { Chip } from "@components/chip/Chip";

import { useParams, useNavigate } from "react-router-dom";
import { useNuguInfo } from "./_hooks/useNuguInfo";
import { useToast } from "@hooks/useToast";
import { ToastContainer } from "@components/toast/Toast";
import { isIOS, isAndroid } from "react-device-detect";

export const Nugu = () => {
  const { uuid } = useParams();
  const { data, isAdmin } = useNuguInfo(uuid);
  const { toast, showToast } = useToast();
  const navigate = useNavigate();
  const moveOnPatch = () => {
    navigate(`/nugu/patch/${uuid}`);
  };
  const handleMoveInstagram = (instaUrl) => {
    if (isAndroid) {
      window.location.replace(
        `intent://instagram.com/${instaUrl}#Intent;scheme=https;package=com.instagram.android;end`
      );
    } else {
      window.open(`https://instagram.com/${instaUrl}`, "_blank");
    }
  };

  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        showToast("공유링크 복사완료!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout
      $backgroundColor={"blue200"}
      $margin="3rem 0 0 0"
      $justifyContent="start"
    >
      {toast.visible && (
        <ToastContainer type={toast.type}>{toast.message}</ToastContainer>
      )}
      <NavigateBar />
      <S.Wrapper>
        <S.TitleWrapper>
          <S.MainTextWrapper>
            <S.NuguTitle>{data.nickname}의 누구</S.NuguTitle>
            <S.Image
              src={"/images/insta.svg"}
              onClick={() => handleMoveInstagram(data.instaUrl)}
            />
          </S.MainTextWrapper>
          <S.MBTITitle>{data.mbti}</S.MBTITitle>
          <S.MemberTitle>{data.org}</S.MemberTitle>
        </S.TitleWrapper>
        <S.BackgroundCircle>
          <S.CloudImg src="/images/NuguCreateImg.svg" />
        </S.BackgroundCircle>
        <S.Introduce>{data.intro || ""}</S.Introduce>
        <S.ChipWrapper>
          {data.keywords.map((keyword, index) => (
            <Chip $backgroundColor={"white"} key={index}>
              {keyword}
            </Chip>
          ))}
        </S.ChipWrapper>
        {isAdmin && (
          <S.AdminWrapper>
            <S.ShareBtn onClick={() => handleShare()}>누구 공유하기</S.ShareBtn>
            <S.EditBtn onClick={() => moveOnPatch()}>수정하기</S.EditBtn>
          </S.AdminWrapper>
        )}
      </S.Wrapper>
    </Layout>
  );
};
