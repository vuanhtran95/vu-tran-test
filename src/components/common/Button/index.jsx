import * as S from "./styles";
import PropTypes from "prop-types";

const Button = ({ label, onClick }) => {
  return <S.StyledButton onClick={onClick}>{label}</S.StyledButton>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
