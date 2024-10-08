import * as S from "./styles";

const Button = ({ label, onClick }) => {
  return <S.StyledButton onClick={onClick}>{label}</S.StyledButton>;
};

export default Button;
