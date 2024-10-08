import PropTypes from "prop-types";
import { StyledInput, SearchContainer, SearchIcon } from "./styles";

const InputField = ({ width, value, placeholder, icon, onChange }) => {
  return (
    <SearchContainer>
      {icon && <SearchIcon icon={icon} />}
      <StyledInput onChange={onChange} hasIcon={!!icon} width={width} value={value} placeholder={placeholder} />
    </SearchContainer>
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
