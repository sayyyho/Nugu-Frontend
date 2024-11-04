import * as S from "./styled";

export const Input = ({ title, name, value, onChange, placeholder }) => {
  return (
    <label>
      <S.Textfield>
        <S.TextTitle>{title}</S.TextTitle>
        <S.InputContainer
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        ></S.InputContainer>
      </S.Textfield>
    </label>
  );
};
