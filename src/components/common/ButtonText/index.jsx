import * as S from "./styles";
import PropTypes from "prop-types";

const ButtonText = ({ label, onClick }) => {
  return <S.StyledButtonText onClick={onClick}>{label}</S.StyledButtonText>;
};

ButtonText.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonText;
