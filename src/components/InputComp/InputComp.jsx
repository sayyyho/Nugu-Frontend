import * as S from "./styled";

export const InputComp = ({ title, name, value, onChange, placeholder }) => {
  return (
    <label>
      <S.textfield>
        <S.textTitle>{title}</S.textTitle>
        <S.InputContainer
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        ></S.InputContainer>
      </S.textfield>
    </label>
  );
};
