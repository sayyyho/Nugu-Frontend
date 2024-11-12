import * as S from "./styled";

export const Layout = ({
  children,
  $backgroundColor,
  $margin = "0rem",
  $justifyContent = "center",
}) => {
  return (
    <S.Layout
      $backgroundColor={$backgroundColor}
      $margin={$margin}
      $justifyContent={$justifyContent}
    >
      {children}
    </S.Layout>
  );
};
