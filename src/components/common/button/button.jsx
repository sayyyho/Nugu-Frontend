import * as S from "./styled";

export const Button = ({ disabled, onClick, children }) => {
  return (
    <S.LoginBtn disabled={disabled} onClick={onClick}>
      {children}
    </S.LoginBtn>
  );
};
