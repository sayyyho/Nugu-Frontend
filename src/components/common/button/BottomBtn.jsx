import * as S from "./styled";

export const Button = ({ disabled, onClick, children }) => {
  return (
    <S.BottomBtn disabled={disabled} onClick={onClick}>
      {children}
    </S.BottomBtn>
  );
};
