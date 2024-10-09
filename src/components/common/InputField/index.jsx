import PropTypes from "prop-types";
import * as S from './styles'

const InputField = ({ width, value, placeholder, icon, onChange }) => {
  return (
    <S.InputFieldContainer>
      {icon && <S.InputIcon icon={icon} />}
      <S.StyledInput onChange={onChange} hasIcon={!!icon} width={width} value={value} placeholder={placeholder} />
    </S.InputFieldContainer>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
