import * as S from "./styles";

const InputField = ({ value, placeholder, width }) => {
  return <S.StyledInput width={width} value={value} placeholder={placeholder} />;
};

export default InputField;
