import * as S from "./styled";

export const Chip = ({ children, onClick, $backgroundColor }) => {
  return (
    <S.Chip $backgroundColor={$backgroundColor} onClick={onClick}>
      {children}
    </S.Chip>
  );
};
