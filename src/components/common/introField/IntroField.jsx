import * as S from "./styled";
export const IntroField = ({ isNuguIntro }) => {
  const IntroList =
    isNuguIntro && isNuguIntro.intro_list.length > 0
      ? isNuguIntro.intro_list
      : null;
  console.log("IntroList", IntroList);
  const isList = IntroList && IntroList.length > 0;

  return (
    <>
      {isList ? (
        IntroList.map((intro, index) => (
          <S.TextContainer key={index}>
            <S.Textfield>{intro}</S.Textfield>
            <S.Nugu>누구</S.Nugu>
          </S.TextContainer>
        ))
      ) : (
        <S.TextContainer>
          <S.Textfield>아직 누구 소개가 존재하지 않아요 :(</S.Textfield>
          <S.Nugu>누구</S.Nugu>
        </S.TextContainer>
      )}
    </>
  );
};
