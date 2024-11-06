import * as S from "./styled";

export const Chip = ({ children, $backgroundColor = "white" }) => {
  return <S.Chip $backgroundColor={$backgroundColor}>{children}</S.Chip>;
};
