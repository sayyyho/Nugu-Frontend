import * as S from "./styled";

export const Button = ({ disabled, onClick, children }) => {
  return (
    <S.Btn disabled={disabled} onClick={onClick}>
      {children}
    </S.Btn>
  );
};
