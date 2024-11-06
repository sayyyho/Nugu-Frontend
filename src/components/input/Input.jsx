import * as S from "./styled";

export const Input = ({
  title,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => {
  return (
    <label>
      <S.Textfield>
        <S.TextTitle>{title}</S.TextTitle>
        <S.InputContainer
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        ></S.InputContainer>
      </S.Textfield>
    </label>
  );
};
