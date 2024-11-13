import * as S from "./styled";
import { Layout } from "@components/common/layout/Layout";
import { NavigateBar } from "@components/common/navigateBar/NavigateBar";
import { Chip } from "@components/chip/Chip";

import { useParams } from "react-router-dom";
import { useNuguInfo } from "./_hooks/useNuguInfo";

export const NuguAdmin = () => {
  const { uuid } = useParams();
  const { data } = useNuguInfo(uuid);
  console.log(data);
  return (
    <Layout
      $backgroundColor={"blue200"}
      $margin="3rem 0 0 0"
      $justifyContent="start"
    >
      <NavigateBar />
      <S.Wrapper>
        <S.TitleWrapper>
          <S.MainTextWrapper>
            <S.NuguTitle>{data.nickname}의 누구</S.NuguTitle>
            <S.Image
              src={"/images/insta.svg"}
              onClick={() => (window.location.href = data.instaUrl)}
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
        <S.AdminWrapper>
          <S.ShareBtn>누구 공유하기</S.ShareBtn>
          <S.EditBtn>수정하기</S.EditBtn>
        </S.AdminWrapper>
      </S.Wrapper>
    </Layout>
  );
};

/**
 * - 접속자
 * 우선 쿠키를 조회한다. -> 이걸로 라우팅을 분기한다.
 * 쿠키가 있다면, user에 쿠키를 실어서 요청한다.
 * uuid를 받아 스토리지에 어딘가에 저장한다.
 * 공유 버튼을 누르면 uuid에 따른 링크를 생성한다.
 *
 * - 소유자
 * guest url은 uuid를 포함한 url로 준다. routing 시, uuid를 파싱해서 api를 요청한다.
 *
 *
 */
