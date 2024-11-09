import * as S from "./styled";

export const Layout = ({ children, $backgroundColor }) => {
  return <S.Layout $backgroundColor={$backgroundColor}>{children}</S.Layout>;
};
